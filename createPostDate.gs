/* postDataを作るための関数
*
* @param LINEを送るGroupId
* @param 配車する日程
* @param 時間と車種の組み合わせ
*/


function createPostData(id,date,contents) {
  var te = requestText(contents);
  
  var postData = {
    "to": id,
    "messages": [{
      "type": "flex",
      "altText": "五井火力配車依頼",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": date + " 五井火力",
              "size": "md",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "sm",
              "contents": [
              {
                "type": "text",
                "text": date + "分の五井火力の引取依頼です。配車可否のご連絡をお願い申し上げます。",
                "size": "sm",
                "color": "#474545",
                "wrap": true
              }
                ]
            },
            {
              "type": "box",
              "layout": "vertical",
              "spacing": "sm",
              "contents": [
              {
                "type": "box",
                "layout": "baseline",
                "spacing": "sm",
                "contents": [
                {
                  "type": "text",
                  "text": te,
                  "size": "sm",
                  "weight": "bold",
                  "color": "#474545",
                  "wrap": true
                }
                  ]
              }
                ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "md",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "配車可能",
                "text": "配車可能です！",
                "data": "accepted"
              },
              "color": "#1D00FB",
              "style": "primary"
            },
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "変更希望",
                "text": "変更希望です！",
                "data": "rejected"
              },
              "style": "secondary"
            }
          ]
        }
      }
    }]
  };
  return postData
}

// 配車依頼用テキストの作成
function requestText(contents) {
  var text = '';
   
  for (var i=0; i<contents.length; i++) {
    text += '\n'+ contents[i].time + " " + contents[i].truck;
  }
  
  return text
}

function createNullPostData(id,date) {
  var postData = {
    "to": id,
    "messages": [{
      "type": "flex",
      "altText": "五井火力配車依頼",
      "contents": {
        "type": "bubble",
        "body": {
          "type": "box",
          "layout": "vertical",
          "contents": [
            {
              "type": "text",
              "text": date + " 五井火力",
              "size": "md",
              "weight": "bold"
            },
            {
              "type": "box",
              "layout": "baseline",
              "margin": "sm",
              "contents": [
                {
                  "type": "text",
                  "text": date + "分の五井火力の引取依頼はなしとなります。よろしくお願い申し上げます。",
                  "size": "sm",
                  "color": "#474545",
                  "wrap": true
                }
              ]
            }
          ]
        },
        "footer": {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "button",
              "action": {
                "type": "postback",
                "label": "確認",
                "text": "確認しました！",
                "data": "confirm"
              },
              "height": "sm",
              "style": "secondary"
            }
          ]
        }
      }
    }]
  }
  return postData
}
