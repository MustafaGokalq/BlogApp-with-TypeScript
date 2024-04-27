"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const category_1 = __importDefault(require("../models/category"));
const blog_1 = __importDefault(require("../models/blog"));
const user_1 = __importDefault(require("../models/user"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const role_1 = __importDefault(require("../models/role"));
function populate() {
    return __awaiter(this, void 0, void 0, function* () {
        const count = yield category_1.default.count();
        if (count == 0) {
            const users = yield user_1.default.bulkCreate([
                { name: "mustafa", email: "mustafa@gmail.com", password: yield bcrypt_1.default.hash("123456", 10) },
                { name: "erhan", email: "erhan@gmail.com", password: yield bcrypt_1.default.hash("123456", 10) },
                { name: "ridvan", email: "ridvan@gmail.com", password: yield bcrypt_1.default.hash("123456", 10) },
            ]);
            const roles = yield role_1.default.bulkCreate([
                { roleName: "admin" },
                { roleName: "moderator" },
                { roleName: "guest" },
            ]);
            yield users[0].addRole(roles[0]);
            yield users[1].addRole(roles[1]);
            yield users[2].addRole(roles[2]);
            const categories = yield category_1.default.bulkCreate([
                { name: "Web Geliştirme" },
                { name: "Mobil Geliştirme" },
                { name: "Programlama" },
            ]);
            const blogs = yield blog_1.default.bulkCreate([
                {
                    baslik: "Komple Uygulamalı Web Geliştirme Eğitimi",
                    altbaslik: "Sıfırdan ileri seviyeye 'Web Geliştirme': Html, Css, Sass, Flexbox, Bootstrap, Javascript, Angular, JQuery, Asp.Net Mvc&Core Mvc",
                    aciklama: "Web geliştirme komple bir web sitesinin hem web tasarım (html,css,javascript), hem de web programlama (asp.net mvc) konularının kullanılarak geliştirilmesidir. Sadece html css kullanarak statik bir site tasarlayabiliriz ancak işin içine bir web programlama dilini de katarsak dinamik bir web uygulaması geliştirmiş oluruz.",
                    resim: "1.jpeg",
                    anasayfa: true,
                    onay: true,
                },
                {
                    baslik: "Python ile Sıfırdan İleri Seviye Python Programlama",
                    altbaslik: "Sıfırdan İleri Seviye Python Dersleri.Veritabanı,Veri Analizi,Bot Yazımı,Web Geliştirme(Django)",
                    aciklama: "Python, son zamanların en popüler programlama dili haline geldi. Python' ın bu kadar popüler olmasındaki sebep şüphesiz öğrenmesi kolay bir yazılım dili olmasıdır.sadikturan adreslerinde paylaşmış olduğum python dersleri serisini takip ederek ister video ister yazılı kaynaklar yardımıyla kısa zamanda python programlama alanında uzmanlık kazanın ve hayal ettiğiniz projeyi gerçekleştirin.",
                    resim: "2.jpeg",
                    anasayfa: true,
                    onay: true,
                },
                {
                    baslik: "Sıfırdan İleri Seviye Modern Javascript Dersleri ES7+",
                    altbaslik: "Modern javascript dersleri ile (ES6 & ES7+) Nodejs, Angular, React ve VueJs için sağlam bir temel oluşturun.",
                    aciklama: "Neden Javascript? Javascript son zamanlarda en popüler diller arasında yerini aldı hatta Javascript listenin en başında diyebiliriz. Peki son zamanlarda bu kadar popüler hale gelen Javascript nedir? Çoğu web geliştirici için Javascript sadece tarayıcıda yani client tarafında çalışan ve html içeriklerini hareketli hale getiren bir script dili olarak biliniyor.  Web sitemize eklediğimiz bir resim galerisi, bir butona tıkladığımızda bir pop-up kutusunun açılması gibi html içeriklerini hareketli hale getiren ve yıllardır kullandığımız programlama dili tabi ki Javascript. Bu yönüyle Javascript 'i yıllardır zaten kullanmaktayız. Ancak son zamanlarda Javascript' i bu kadar popüler yapan neden nedir?",
                    resim: "3.jpeg",
                    anasayfa: true,
                    onay: true,
                },
                {
                    baslik: "Node.js ile Sıfırdan İleri Seviye Web Geliştirme",
                    altbaslik: "Node.js ile sıfırdan ileri seviye dinamik web uygulaması geliştirmeyi öğren.",
                    aciklama: "En popüler programlama dili olan Javascript programlama dilini artık Node.js sayesinde server tabanlı bir dil olarak kullanabilirsin.Kurs sonunda sadece Javascript programlama dilini kullanarak Fullstack bir web geliştirici olmak istiyorsan hemen kursa katılmalısın! Üstelik 30 gün iade garantisiyle! Kursumuz piyasadaki en popüler ve en güncel Node.js kursudur.",
                    resim: "4.jpeg",
                    anasayfa: true,
                    onay: true,
                },
            ]);
            yield categories[0].addBlog(blogs[0]);
            yield categories[0].addBlog(blogs[1]);
            yield categories[0].addBlog(blogs[2]);
            yield categories[0].addBlog(blogs[3]);
            yield categories[0].addBlog(blogs[4]);
            yield categories[0].addBlog(blogs[5]);
            yield categories[0].addBlog(blogs[6]);
            yield categories[1].addBlog(blogs[7]);
            yield categories[1].addBlog(blogs[8]);
            yield categories[1].addBlog(blogs[2]);
            yield categories[1].addBlog(blogs[3]);
            yield categories[2].addBlog(blogs[2]);
            yield categories[2].addBlog(blogs[3]);
            yield blogs[0].addCategory(categories[1]);
        }
    });
}
// migrations
exports.default = populate;
