document.addEventListener('DOMContentLoaded', function () {
  // 日付を表示
  const today = new Date();
  document.getElementById('date').textContent = today.toLocaleDateString();

 // テキスト候補  
const textOptions = [  
  'ドーナツの穴を持ち帰ることができないのは、不公平だと思った',  
  '部長は、ある朝。目を覚ますと、ドーナツがはまっていた',  
  'ドーナツの穴は、ポップカルチャーとしての色即是空',  
  '所有者は、自由に商用利用できる。これが、部長のルール',  
  'CC0やフルオンチェーンに対する憧れはどこから来るのか',  
  '2071年になれば、この画像には大きな変化が訪れる',  
  '完全数は、部長を"緑の完全体"へと変える',  
  '不確かな情報では、このトークンはBURN可能', 
  'この部長はNFT ART TOKYOのために制作されました', 
  'このテキストはランダムに表示が変化します',
  '15:00になると、部長の前のドーナツは消えます',  
  '24:00になれば、人知れずドーナツたちは戻ってきます', 
  '部長の姿は、月日に応じて変化します', 
  '24:00になる頃には、ドーナツもまた夢の世界へ…',
  '全てを受容する力、「これでいいのだ」こそが理想',  
  '1日に食べてもいいドーナツは、多分３つまで',    
  'ドーナツの穴を持ち帰ることができないのは、不公平だと思った。'  
];  

// ランダムなインデックスを生成
const randomIndex = Math.floor(Math.random() * textOptions.length);

// ランダムなインデックスに対応するテキストを表示
document.getElementById('text2').textContent = textOptions[randomIndex];


// RGBの各成分をランダムに生成
const randomRed = Math.floor(Math.random() * 256);
const randomGreen = Math.floor(Math.random() * 256);
const randomBlue = Math.floor(Math.random() * 256);

// カラーフィルターの背景色をランダムな色に設定
document.querySelector('.color-filter').style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;



// 時間が15:00から23:59の間であればimg2-1を非表示にする
const currentHour = today.getHours();
if (currentHour >= 15) {
  document.querySelectorAll('.img2-1').forEach(function(img) {
    img.style.display = 'none';
  });
}


// 6:00から15:00の間はimg0-2とimg0-3を非表示にする
  if (currentHour >= 6 && currentHour < 15) {
    document.querySelectorAll('.img0-2, .img0-3').forEach(function(img) {
      img.style.display = 'none';
    });
  }

  // 15:00から24:00の間はimg0-3を非表示にする
  else if (currentHour >= 15 && currentHour < 24) {
    document.querySelector('.img0-3').style.display = 'none';
  }


  // 日付に基づいてimg1-2とimg1-3の表示を制御
  const currentDay = today.getDate();
  if (currentDay === 6 || currentDay === 28) {
    document.querySelector('.img1-3').style.display = 'block';
  } else if (currentDay >= 1 && currentDay <= 5 || currentDay >= 7 && currentDay <= 15) {
    document.querySelectorAll('.img1-2, .img1-3').forEach(function(img) {
      img.style.display = 'none';
    });
  } else if (currentDay >= 16 && currentDay <= 27 || currentDay >= 29 && currentDay <= 31) {
    document.querySelector('.img1-3').style.display = 'none';
  }


// 指定日付範囲内であればimg3を表示する
  const startDisplayDate = new Date(2071, 0, 1); // 2071年1月1日0:00
  const endDisplayDate = new Date(2071, 11, 14, 23, 59); // 2071年12月14日23:59
  if (today >= startDisplayDate && today <= endDisplayDate) {
    document.querySelector('.img3').style.display = 'block';
  } else {
    document.querySelector('.img3').style.display = 'none';
  }



  // 月に対応するテキストを表示
  const monthNames = [
    '睦月',
    '如月',
    '弥生',
    '卯月',
    '皐月',
    '水無月',
    '文月',
    '葉月',
    '長月',
    '神無月',
    '霜月',
    '師走'
  ];
  const currentMonth = today.getMonth();
  document.getElementById('text3').textContent = monthNames[currentMonth];
});










