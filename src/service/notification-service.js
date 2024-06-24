import { google } from 'googleapis';
import https  from 'https';
import { prismaClient } from '../application/database.js';

import key from '../lahan-damai-firebase-adminsdk-hjzwb-77805cb9b1.json' assert {type: "json"};

const PROJECT_ID = 'lahan-damai-23819';
const HOST = 'fcm.googleapis.com';
const PATH = '/v1/projects/' + PROJECT_ID + '/messages:send';
const MESSAGING_SCOPE = 'https://www.googleapis.com/auth/firebase.messaging';
const SCOPES = [MESSAGING_SCOPE];

function getAccessToken() {
    return new Promise(function(resolve, reject) {
      const jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key,
        SCOPES,
        null
      );
      jwtClient.authorize(function(err, tokens) {
        if (err) {
          reject(err);
          return;
        }
        resolve(tokens.access_token);
      });
    });
}

function sendFcmMessage(fcmMessage) {
    getAccessToken().then(function(accessToken) {
      const options = {
        hostname: HOST,
        path: PATH,
        method: 'POST',
        // [START use_access_token]
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
        // [END use_access_token]
      };
  
      const request = https.request(options, function(resp) {
        resp.setEncoding('utf8');
        resp.on('data', function(data) {
          console.log('Message sent to Firebase for delivery, response:');
          console.log(data);
        });
      });
  
      request.on('error', function(err) {
        console.log('Unable to send message to Firebase');
        console.log(err);
      });
  
      request.write(JSON.stringify(fcmMessage));
      request.end();
    });
}

function buildOverrideMessage(token, title, body) {
    const fcmMessage = buildCommonMessage();  
    fcmMessage['message']['token'] = token;
    fcmMessage['message']['notification']['body'] = body;
    fcmMessage['message']['notification']['title'] = title;
    
    sendFcmMessage(fcmMessage);
}

function buildCommonMessage() {
    return {
      'message': {
        'notification': {
          'title': 'FCM Notification',
          'body': 'Notification from FCM'
        }
      }
    };
}

const updateProsesLaporanNotification = async (user_nik, no_sertifikat, proses_laporan) => {
    const token = await prismaClient.user.findUnique({
        where: {
            nik: user_nik
        },
        select: {
            fcm_token: true
        }
    });
    if (!token.fcm_token) {
        console.log(404, "user tidak memiliki token fcm");
    } else {
        buildOverrideMessage(token.fcm_token, 'Laporan anda dengan no sertifikat ' + no_sertifikat + ' sedang ' + proses_laporan, 'Laporan anda ' + proses_laporan + ' ');
    }
}

const sendReplyNotification = async (threadId, replyAuthor, replyContent) => {
    const user = await prismaClient.thread.findUnique({
        where: { id: threadId },
        select: { user_nik: true },
    });

    const { fcm_token } = await prismaClient.user.findUnique({
        where: { nik: user.user_nik },
        select: { fcm_token: true },
    });

    if (fcm_token) {
        buildOverrideMessage(fcm_token, `${replyAuthor} replied`, replyContent);
    }
};

const testNotification = async (token) => {
    buildOverrideMessage(token, 'ignore, this is a notification test', 'test notification');
}

export {
    buildOverrideMessage,
    updateProsesLaporanNotification,
    testNotification,
    sendReplyNotification
}