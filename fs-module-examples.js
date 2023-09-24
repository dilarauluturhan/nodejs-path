// import * as fs from 'node:fs';

// DOSYA OKUMAK
// fs.readFile('password.txt', 'utf8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
//     console.log('DOSYA OKUNDU');
// })

// DOSYA YAZMAK
// fs.writeFile('example.json', 'Hello Node.js', 'utf8', (err) => {
//     if (err) console.log(err);
//     console.log('DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU');
// })

// VERİ EKLEMEK
// fs.appendFile('example.txt', ' - Hello Dogs', 'utf8', (err) => {
//     if(err) console.log(err);
//     console.log('VERİ EKLENDİ');
// })

// DOSYA SİLMEK
// fs.unlink('example.json', (err) => {
//     if (err) console.log(err);
//     console.log('DOSYA SİLİNDİ');
// })

// KLASÖRLER OLUŞTURMAK
// fs.mkdir('uploads/img', { recursive: true }, (err) => {
//     if (err) console.log(err);
//     console.log('KLASÖRLER OLUŞTURULDU');
// })

// KLASÖRLERİ SİLMEK
// fs.rmdir('uploads', { recursive: true }, (err) => {
//     if (err) console.log(err);
//     console.log('KLASÖRLER SİLİNDİ');
// })