

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
var daTaSongs = [
  {
    _id: "5a9239802b681d13ec7ce33e",
    title: "Người Lạ Ơi",
    artists: "Karik, Orange, Superbrothers",
    link:
      "//zmp3-mp3-s1.zadn.vn/aff2b47361378869d126/5515390283663582634?authen=exp=1519610389~acl=/aff2b47361378869d126/*~hmac=c2b6cf0aad04120eea8de05bdffd2423",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/2/12a12b09a9de42c53126ba39002c6c29_1515217873.jpg",
    order: 1
  },
  {
    _id: "5a9239802b681d13ec7ce33f",
    title: "Buồn Của Anh",
    artists: "K-ICM, Đạt G, Masew",
    link:
      "//zmp3-mp3-s1.zadn.vn/ffe961cab58e5cd0059f/68695268730484457?authen=exp=1519612616~acl=/ffe961cab58e5cd0059f/*~hmac=51f4f106e780fd17403bdc3b1ad9aff3",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/0/c0827e5f2c898fc987e7883151b0476a_1513651595.png",
    order: 2
  },
  {
    _id: "5a9239802b681d13ec7ce340",
    title: "Ánh Nắng Của Anh (Chờ Em Đến Ngày Mai OST)",
    artists: "Đức Phúc",
    link:
      "//zmp3-mp3-s1.zadn.vn/79cec7744e30a76efe21/561239208516760182?authen=exp=1519615647~acl=/79cec7744e30a76efe21/*~hmac=c36d38aa057a7d2b8063c8834254119b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/avatars/d/7/d7f34aa6b1112e4b605f6c6e7eccd162_1509437674.jpg",
    order: 3
  },
  {
    _id: "5a9239802b681d13ec7ce341",
    title: "Cùng Anh",
    artists: "Ngọc Dolil, Hagi, STee",
    link:
      "//zmp3-mp3-s1.zadn.vn/03738e675a23b37dea32/2313787426765899173?authen=exp=1519612630~acl=/03738e675a23b37dea32/*~hmac=0380fcce1c12faf5f1bb76ad35cb3565",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/d/ad67a7fbc0b8ad7eac660eb803cdeb21_1514533626.jpg",
    order: 4
  },
  {
    _id: "5a9239802b681d13ec7ce342",
    title: "Để Cho Em Khóc (Vali Tình Yêu OST)",
    artists: "Vy Oanh",
    link:
      "//zmp3-mp3-s1.zadn.vn/04012077cf33266d7f22/3177598637209028991?authen=exp=1519618617~acl=/04012077cf33266d7f22/*~hmac=b50d3f410c85cb573f1fee81ed262658",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/7/8/78822d9ca7bae4240a7f9048e776dc4e_1487909110.jpg",
    order: 5
  },
  {
    _id: "5a9239802b681d13ec7ce343",
    title: "Mình Cưới Nhau Đi",
    artists: "Huỳnh James, Pjnboys",
    link:
      "//zmp3-mp3-s1.zadn.vn/603a21fff7bb1ee547aa/6745492230489640910?authen=exp=1519605876~acl=/603a21fff7bb1ee547aa/*~hmac=e17b2fabf00a46e255fbbd748e77a3f5",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/3/d304a3c50d3eb7a6ada2b1c8c546d618_1517579206.jpg",
    order: 6
  },
  {
    _id: "5a9239802b681d13ec7ce344",
    title: "Kém Duyên",
    artists: "Rum, NIT, Masew",
    link:
      "//zmp3-mp3-s1.zadn.vn/ff1578e2aca645f81cb7/285902104879125743?authen=exp=1519607144~acl=/ff1578e2aca645f81cb7/*~hmac=e732ae046d0035682ccdce478fff6b7b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/b/8bdfda3e88db5f9b6bf2ff7d1757e989_1510654845.jpg",
    order: 7
  },
  {
    _id: "5a9239802b681d13ec7ce345",
    title: "Sống Xa Anh Chẳng Dễ Dàng",
    artists: "Bảo Anh",
    link:
      "//zmp3-mp3-s1.zadn.vn/0115d71e0c5ae504bc4b/4205179650957840805?authen=exp=1519606243~acl=/0115d71e0c5ae504bc4b/*~hmac=b9a93ae7c713d8ec2e1ac6c3d7600fd4",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1509525165.jpg",
    order: 8
  },
  {
    _id: "5a9239802b681d13ec7ce346",
    title: "Em Gái Mưa",
    artists: "Hương Tràm",
    link:
      "//zmp3-mp3-s1.zadn.vn/2daa5beb81af68f131be/3246869633634662863?authen=exp=1519615394~acl=/2daa5beb81af68f131be/*~hmac=395f1afef18b61837a5de4674addb642",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1504595022.jpg",
    order: 9
  },
  {
    _id: "5a9239802b681d13ec7ce347",
    title: "Trong Trí Nhớ Của Anh",
    artists: "Nguyễn Trần Trung Quân",
    link:
      "//zmp3-mp3-s1.zadn.vn/0da5aac87f8c96d2cf9d/9161489175895604898?authen=exp=1519609308~acl=/0da5aac87f8c96d2cf9d/*~hmac=a6ec0ae75ad448ca42efca24ca8338ad",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/4/b41920b12c94d7dc262bd2af3c028922_1515491296.jpg",
    order: 10
  },
  {
    _id: "5a9239802b681d13ec7ce348",
    title: "Đừng Ai Nhắc Về Anh Ấy",
    artists: "Trà My Idol",
    link:
      "//zmp3-mp3-s1.zadn.vn/de0f10f2c8b621e878a7/8028330437800394190?authen=exp=1519613123~acl=/de0f10f2c8b621e878a7/*~hmac=3546d3783bf70e06b285686f3124801d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/7/7/77a8e81fa7b8d83babc10fbf061b8338_1495638639.jpg",
    order: 11
  },
  {
    _id: "5a9239802b681d13ec7ce349",
    title: "Mặt Trời Của Em",
    artists: "Phương Ly, JustaTee",
    link:
      "//zmp3-mp3-s1.zadn.vn/64d9e2e639a2d0fc89b3/5367828857673443509?authen=exp=1519616262~acl=/64d9e2e639a2d0fc89b3/*~hmac=fc5b8381352dc007cc5c750a92abf9e8",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/9/19c8d9340b18111044e084d806335fd9_1509176983.jpg",
    order: 12
  },
  {
    _id: "5a9239802b681d13ec7ce34a",
    title: "Người Phản Bội",
    artists: "Lê Bảo Bình",
    link:
      "//zmp3-mp3-s1.zadn.vn/8b2d06c2d2863bd86297/7042669372465427612?authen=exp=1519618262~acl=/8b2d06c2d2863bd86297/*~hmac=11a917c1866acd00be7a2ad80ed2e799",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/avatars/a/3/a337eebfabeb343072c623503c5527b9_1509591292.jpg",
    order: 13
  },
  {
    _id: "5a9239802b681d13ec7ce34b",
    title: "Đã Lỡ Yêu Em Nhiều",
    artists: "JustaTee",
    link:
      "//zmp3-mp3-s1.zadn.vn/7147afa27be692b8cbf7/3858972813232405650?authen=exp=1519606703~acl=/7147afa27be692b8cbf7/*~hmac=526bd980ca32d361fe76ae172ba824b5",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/a/dae7488899bf6ee55f4127cb6a889391_1510557125.jpg",
    order: 14
  },
  {
    _id: "5a9239802b681d13ec7ce34c",
    title: "Chuyện Anh Vẫn Chưa Kể",
    artists: "Chi Dân",
    link:
      "//zmp3-mp3-s1.zadn.vn/5065ea483e0cd7528e1d/7013312474826125960?authen=exp=1519610035~acl=/5065ea483e0cd7528e1d/*~hmac=4e84251b0f9fbf586fc90ec2ad5f6e96",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/2/7/27e28f2246089f1f54390eb6bd6d218b_1512960423.jpg",
    order: 15
  },
  {
    _id: "5a9239802b681d13ec7ce34d",
    title: "Giả Vờ Thương Anh Được Không",
    artists: "Chu Bin",
    link:
      "//zmp3-mp3-s1.zadn.vn/337e3a85dbc1329f6bd0/7174013217809661129?authen=exp=1519611499~acl=/337e3a85dbc1329f6bd0/*~hmac=995ba0be9b7c896abc0d052be40ccf5e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/f/1fe88bcbff5737304b1df55ef537cd76_1491637103.jpg",
    order: 16
  },
  {
    _id: "5a9239802b681d13ec7ce34e",
    title: "Chạm Khẽ Tim Anh Một Chút Thôi",
    artists: "Noo Phước Thịnh",
    link:
      "//zmp3-mp3-s1.zadn.vn/310aeb9a30ded98080cf/2052443568711528321?authen=exp=1519616256~acl=/310aeb9a30ded98080cf/*~hmac=a1da7e1a207e7f8c78fb7f034ea3a369",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/e/6e7b90d96728c9ce1b4c2a104d622784_1507799020.jpg",
    order: 17
  },
  {
    _id: "5a9239802b681d13ec7ce34f",
    title: "1 Phút",
    artists: "Andiez",
    link:
      "//zmp3-mp3-s1.zadn.vn/09864cab96ef7fb126fe/6545706316276108068?authen=exp=1519612632~acl=/09864cab96ef7fb126fe/*~hmac=8c8d81c910fdb188327a2d6019fee260",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/d/fd4276c762a53e86ec980bb373a5a805_1504774753.jpg",
    order: 18
  },
  {
    _id: "5a9239802b681d13ec7ce350",
    title: "Túy Âm",
    artists: "Xesi, Masew, Nhật Nguyễn",
    link:
      "//zmp3-mp3-s1.zadn.vn/1566955f4f1ba645ff0a/5714298647625346942?authen=exp=1519616050~acl=/1566955f4f1ba645ff0a/*~hmac=b2eeadd1ad9e92a7b1402bab08001509",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/9/f9c0475ec02716554fba3f63e5b4ac37_1504991428.jpg",
    order: 19
  },
  {
    _id: "5a9239802b681d13ec7ce351",
    title: "Bên Nhau Thật Khó",
    artists: "Châu Khải Phong, Khang Việt",
    link:
      "//zmp3-mp3-s1.zadn.vn/50e6f5442e00c75e9e11/2192015726100492765?authen=exp=1519613946~acl=/50e6f5442e00c75e9e11/*~hmac=251bdd6b5b21312f17cbebe9e0c8ba34",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/0/001d278979f5979f8d9010e3f3482981_1507106621.jpg",
    order: 20
  },
  {
    _id: "5a9239802b681d13ec7ce352",
    title: "Phía Sau Một Cô Gái",
    artists: "Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/a32e305cab1842461b09/4870257449214198184?authen=exp=1519606248~acl=/a32e305cab1842461b09/*~hmac=8759410f21ad7352346a2499fe542cee",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/b/cbe2dfb3d65dc97c68f983d09bff78a7_1476796126.jpg",
    order: 21
  },
  {
    _id: "5a9239802b681d13ec7ce353",
    title: "Thấy Là Yêu Thương",
    artists: "OnlyC, Lou Hoàng",
    link:
      "//zmp3-mp3-s1.zadn.vn/d536b5e561a188ffd1b0/747385880158281145?authen=exp=1519614676~acl=/d536b5e561a188ffd1b0/*~hmac=e5f5a316f56e9314a03b17ccc4ab51c5",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/2/b2c0638904fb8f20547dd66f8f18d279_1510887342.jpg",
    order: 22
  },
  {
    _id: "5a9239802b681d13ec7ce354",
    title: "Xin Đừng Lặng Im",
    artists: "Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/3cedeac33387dad98396/8127820420268223686?authen=exp=1519616094~acl=/3cedeac33387dad98396/*~hmac=d481e98086280c4d718f9a5d8aff049e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/e/1ebc5f3387b2179e25e55d6208b16b04_1500952255.png",
    order: 23
  },
  {
    _id: "5a9239802b681d13ec7ce355",
    title: "Ta Còn Yêu Nhau",
    artists: "Đức Phúc",
    link:
      "//zmp3-mp3-s1.zadn.vn/fd144ec8958c7cd2259d/2825832577347837847?authen=exp=1519616868~acl=/fd144ec8958c7cd2259d/*~hmac=34a1fe44d0ddff9cdff149d8e83ec95b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/1/61c5d7e2d3d6a354861e05836b1d3734_1506652100.jpg",
    order: 24
  },
  {
    _id: "5a9239802b681d13ec7ce356",
    title: "Chiều Hôm Ấy",
    artists: "Jaykii",
    link:
      "//zmp3-mp3-s1.zadn.vn/19a31852c11628487107/2779820111073802153?authen=exp=1519616807~acl=/19a31852c11628487107/*~hmac=23ff043bd4653feda9dfe8d4e95218ab",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/d/0d1fe0b30a319e56dce058a2b30f37d7_1503588020.jpg",
    order: 25
  },
  {
    _id: "5a9239802b681d13ec7ce357",
    title: "Vỡ (Siêu Sao Siêu Ngố OST)",
    artists: "Đức Phúc",
    link:
      "//zmp3-mp3-s1.zadn.vn/33a3f6a423e0cabe93f1/3181332739902500398?authen=exp=1519617619~acl=/33a3f6a423e0cabe93f1/*~hmac=d9e8d3a19d924bbfc06a69ee42489493",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/3/d3af5475826bb5d68edbdcf735953f58_1516948965.jpg",
    order: 26
  },
  {
    _id: "5a9239802b681d13ec7ce358",
    title: "Cùng Anh (VRT Mix)",
    artists: "Ngọc Dolil, VRT",
    link:
      "//zmp3-mp3-s1.zadn.vn/2ea6afb27bf692a8cbe7/8941937871845013125?authen=exp=1519612674~acl=/2ea6afb27bf692a8cbe7/*~hmac=adead6238589f5e60d78ba4c5019334f",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/d/ad67a7fbc0b8ad7eac660eb803cdeb21_1514533626.jpg",
    order: 27
  },
  {
    _id: "5a9239802b681d13ec7ce359",
    title: "Nơi Này Có Anh",
    artists: "Sơn Tùng M-TP",
    link:
      "//zmp3-mp3-s1.zadn.vn/d41230d1df9536cb6f84/1181817601640857205?authen=exp=1519609580~acl=/d41230d1df9536cb6f84/*~hmac=ed618430e3aba311d0020e7ce3c68782",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/3/a/3a9e48bc4df7bbde3acea30cc267f609_1487066528.jpg",
    order: 28
  },
  {
    _id: "5a9239802b681d13ec7ce35a",
    title: "Thèm",
    artists: "Trung Quân Idol",
    link:
      "//zmp3-mp3-s1.zadn.vn/1911f4b922fdcba392ec/844179679975919899?authen=exp=1519607728~acl=/1911f4b922fdcba392ec/*~hmac=a2aa48976cd57957aa61dc9b1694a483",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/6/c6ae65a9568407007fb90138a993365f_1517911553.png",
    order: 29
  },
  {
    _id: "5a9239802b681d13ec7ce35b",
    title: "Chắc Anh Đang",
    artists: "Tiên Tiên, Trang",
    link:
      "//zmp3-mp3-s1.zadn.vn/1056748fa2cb4b9512da/7597739200946813922?authen=exp=1519614459~acl=/1056748fa2cb4b9512da/*~hmac=424ed9e8d216ad33840ee1fc738dbe69",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/4/945d128e37b1efa4e48c4f03a223a701_1517719878.png",
    order: 30
  },
  {
    _id: "5a9239802b681d13ec7ce35c",
    title: "Hôm Nay Tôi Buồn",
    artists: "Phùng Khánh Linh",
    link:
      "//zmp3-mp3-s1.zadn.vn/58c86f61b925507b0934/4061524407502532887?authen=exp=1519612486~acl=/58c86f61b925507b0934/*~hmac=20c63c5eb538355a31ef3cd34d1e7994",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/8/08193d6fe58d511c3cf519a0cc856c91_1517889125.png",
    order: 31
  },
  {
    _id: "5a9239802b681d13ec7ce35d",
    title: "Yêu Từ Phía Xa",
    artists: "Chi Dân",
    link:
      "//zmp3-mp3-s1.zadn.vn/15e020c4fb8012de4b91/209070464505213997?authen=exp=1519610818~acl=/15e020c4fb8012de4b91/*~hmac=267b9609dad6bb08d4b1e4d631f54234",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/7/9751bd0e0d4fa7026b7a34e8f49cc9ae_1509174251.jpg",
    order: 32
  },
  {
    _id: "5a9239802b681d13ec7ce35e",
    title: "Yêu Em Rất Nhiều",
    artists: "Hoàng Tôn",
    link:
      "//zmp3-mp3-s1.zadn.vn/4e1dcf2c1568fc36a579/6560157113725050153?authen=exp=1519613761~acl=/4e1dcf2c1568fc36a579/*~hmac=6e0ceaa05ba3cd754728a5777ffd8c9c",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/2/b2d7fda219a63962ad3c7a997d8821ee_1506397434.jpg",
    order: 33
  },
  {
    _id: "5a9239802b681d13ec7ce35f",
    title: "Ngày Mai Em Đi (Touliver Mix)",
    artists: "Touliver, Lê Hiếu, Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/ccdf4a779033796d2022/7340335391073080988?authen=exp=1519605891~acl=/ccdf4a779033796d2022/*~hmac=a6168ec45d02f4ec6e1cfe87bc5bde1d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/9/695bf88c1edaf82e0bd5e085716e5598_1501654149.jpg",
    order: 34
  },
  {
    _id: "5a9239802b681d13ec7ce360",
    title: "Không Sao Đâu",
    artists: "Trịnh Thăng Bình",
    link:
      "//zmp3-mp3-s1.zadn.vn/87d59a904fd4a68affc5/4750824408720389026?authen=exp=1519607539~acl=/87d59a904fd4a68affc5/*~hmac=f3eb5e1a52a2fdf66cdcf7af4e56bab1",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/f/6fd650c3b4dbebf7e97d4b490b81e6d5_1515768832.jpg",
    order: 35
  },
  {
    _id: "5a9239802b681d13ec7ce361",
    title: "Thương Nhau Nhé",
    artists: "Đức Phúc, Thùy Chi",
    link:
      "//zmp3-mp3-s1.zadn.vn/45910e7ddb3932676b28/1643993206699403506?authen=exp=1519618680~acl=/45910e7ddb3932676b28/*~hmac=4465a6d54037fc7defb02402bb4787e6",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/6/867007b21bb65ad0c67de8c822704819_1514818500.jpg",
    order: 36
  },
  {
    _id: "5a9239802b681d13ec7ce362",
    title: "Không Thể Yêu Ai Được Nữa",
    artists: "Gin Tuấn Kiệt",
    link:
      "//zmp3-mp3-s1.zadn.vn/5c77f1bd28f9c1a798e8/1142754960564611348?authen=exp=1519607841~acl=/5c77f1bd28f9c1a798e8/*~hmac=4c921d8ed7cf4c2a794b838d01fb9a81",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/2/2/22506e857bc12ab12736b34f18b4f577_1500517132.jpg",
    order: 37
  },
  {
    _id: "5a9239802b681d13ec7ce363",
    title: "Yêu Vội Vàng",
    artists: "Lê Bảo Bình",
    link:
      "//zmp3-mp3-s1.zadn.vn/3edc97530817e149b806/4151012926815339241?authen=exp=1519614200~acl=/3edc97530817e149b806/*~hmac=02815a7b63246ee936072b2519bc66d3",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/5/a55db8b18b37cb07be9a4a5f1903cae1_1479465454.png",
    order: 38
  },
  {
    _id: "5a9239802b681d13ec7ce364",
    title: "Tình Đơn Phương (Acoustic Cover)",
    artists: "Dương Edward, Tùng Acoustic",
    link:
      "//zmp3-mp3-s1.zadn.vn/2bc144b39ef777a92ee6/3574895072993070020?authen=exp=1519607242~acl=/2bc144b39ef777a92ee6/*~hmac=071084d998799b8090f6309f4358a36e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/avatars/3/e/3e114c343f09f59519b2069dc5ab94dc_1504148796.jpg",
    order: 39
  },
  {
    _id: "5a9239802b681d13ec7ce365",
    title: "Có Anh Ở Đây Rồi",
    artists: "Anh Quân Idol",
    link:
      "//zmp3-mp3-s1.zadn.vn/2421b299bbdd52830bcc/3372389553117581895?authen=exp=1519604528~acl=/2421b299bbdd52830bcc/*~hmac=8b0b09d22f25a6888794cf53f9f6c2d1",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/5/f5abf3219ac4b6d45c80c688771f873b_1399444348.jpg",
    order: 40
  },
  {
    _id: "5a9239802b681d13ec7ce366",
    title: "Đổi Thay",
    artists: "Hồ Quang Hiếu",
    link:
      "//zmp3-mp3-s1.zadn.vn/062483671a23f37daa32/9207734067810133046?authen=exp=1519610190~acl=/062483671a23f37daa32/*~hmac=1ed254f1ed471c468c6530afd79d3c1f",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/5/c52f65959e8b0c2aafa7e5ef06f57f17_1471919089.jpg",
    order: 41
  },
  {
    _id: "5a9239802b681d13ec7ce367",
    title: "Cớ Sao Giờ Lại Chia Xa",
    artists: "Bích Phương",
    link:
      "//zmp3-mp3-s1.zadn.vn/87df1116c852210c7843/3729188280310952167?authen=exp=1519614636~acl=/87df1116c852210c7843/*~hmac=dd6921f59067f4dc1939f68a22bef378",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/a/9a156337c55bdc47e1f65963c24077df_1499654363.jpg",
    order: 42
  },
  {
    _id: "5a9239802b681d13ec7ce368",
    title: "Điều Anh Biết",
    artists: "Chi Dân",
    link:
      "//zmp3-mp3-s1.zadn.vn/3deabbb020f4c9aa90e5/3542091817737638361?authen=exp=1519614400~acl=/3deabbb020f4c9aa90e5/*~hmac=cf4e6e5e22e274f8bb9bfaf1abb802bb",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/9/d9eb228bd57dc5e770f130fa8faa8ee0_1477036840.jpg",
    order: 43
  },
  {
    _id: "5a9239802b681d13ec7ce369",
    title: "Đi Để Trở Về",
    artists: "Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/20a30487ddc3349d6dd2/6219653155068498722?authen=exp=1519606446~acl=/20a30487ddc3349d6dd2/*~hmac=7d380a48b2e2a87159240ba1117e4a7a",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/7/9/799e9e176dcb79e3406d48930ce108cf_1483416113.jpg",
    order: 44
  },
  {
    _id: "5a9239802b681d13ec7ce36a",
    title: "Đi Rồi Mới Thương",
    artists: "Võ Kiều Vân",
    link:
      "//zmp3-mp3-s1.zadn.vn/f80c50978bd3628d3bc2/6071975903622858074?authen=exp=1519605524~acl=/f80c50978bd3628d3bc2/*~hmac=8bb64143e0ea85328f243fb8df2fe115",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/6/b6dedc131c90ac3cf9b0b9cde0b7caf2_1507626013.jpg",
    order: 45
  },
  {
    _id: "5a9239802b681d13ec7ce36b",
    title: "Trái Tim Em Cũng Biết Đau",
    artists: "Bảo Anh",
    link:
      "//zmp3-mp3-s1.zadn.vn/257594453701de5f8710/2082399210462049795?authen=exp=1519616026~acl=/257594453701de5f8710/*~hmac=f3c7f45e53a737c4566e6ada7df0c336",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/c/ec946d6ef3dc5ee33221a7dcce05755c_1465133772.jpg",
    order: 46
  },
  {
    _id: "5a9239802b681d13ec7ce36c",
    title: "Lạc Trôi",
    artists: "Sơn Tùng M-TP",
    link:
      "//zmp3-mp3-s1.zadn.vn/58408f9374d79d89c4c6/5263915882515440837?authen=exp=1519606746~acl=/58408f9374d79d89c4c6/*~hmac=b670a9521a56eff661715e9d4d5c6a00",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/8/98e3677733fe52439823d1b1992d9ae0_1483242323.jpg",
    order: 47
  },
  {
    _id: "5a9239802b681d13ec7ce36d",
    title: "Anh Thế Giới Và Em",
    artists: "Hương Tràm",
    link:
      "//zmp3-mp3-s1.zadn.vn/8739deea06aeeff0b6bf/1243431489925204133?authen=exp=1519607163~acl=/8739deea06aeeff0b6bf/*~hmac=b9ed05c8ae78ac5eb208f8bc7ea674d1",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/2/c2522eb472fd5a39518ff02fdd8590a9_1496197004.jpg",
    order: 48
  },
  {
    _id: "5a9239802b681d13ec7ce36e",
    title: "Ngày Mai Sẽ Khác",
    artists: "Lê Hiếu",
    link:
      "//zmp3-mp3-s1.zadn.vn/d0b682b05cf4b5aaece5/3876197819772876415?authen=exp=1519612395~acl=/d0b682b05cf4b5aaece5/*~hmac=d06ecf04ea6291fedff338ec1100e5d3",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/5/f599ba62b60cdf605d6d91e58a21b61b_1492569519.jpg",
    order: 49
  },
  {
    _id: "5a9239802b681d13ec7ce36f",
    title: "Thương",
    artists: "Quốc Thiên",
    link:
      "//zmp3-mp3-s1.zadn.vn/a365c4711f35f66baf24/1868314745346093984?authen=exp=1519605556~acl=/a365c4711f35f66baf24/*~hmac=a0b72a6bcafee84b8726fa29b78d0cbf",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/d/ddeb3089b0db18448d5772f946b1c5b4_1510198011.jpg",
    order: 50
  },
  {
    _id: "5a9239802b681d13ec7ce370",
    title: "Sau Tất Cả",
    artists: "ERIK ST.319",
    link:
      "//zmp3-mp3-s1.zadn.vn/8d481535b4715d2f0460/105509056746938253?authen=exp=1519613760~acl=/8d481535b4715d2f0460/*~hmac=c49e188c39a3c69fc7e1619197faa0f2",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/5/5/55a2e33a5d4d6a70f5144181c28eacb0_1452855672.jpg",
    order: 51
  },
  {
    _id: "5a9239802b681d13ec7ce371",
    title: "Ở Trong Thành Phố (Masew Mix)",
    artists: "B Ray,Masew",
    link:
      "//zmp3-mp3-s1.zadn.vn/c8e5dac60e82e7dcbe93/8605910544569307137?authen=exp=1519610831~acl=/c8e5dac60e82e7dcbe93/*~hmac=7f236a526634c654547eb93c98d49336",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/3/f/3fb2db6cccf4a23383383394b28b2b31_1513592477.jpg",
    order: 52
  },
  {
    _id: "5a9239802b681d13ec7ce372",
    title: "Em Nguyện Là Mây",
    artists: "Wendy Thảo",
    link:
      "//zmp3-mp3-s1.zadn.vn/3ed14a8c9ec877962ed9/8359269652695426233?authen=exp=1519605035~acl=/3ed14a8c9ec877962ed9/*~hmac=eaeb3b4710e9fe2ff4190d56e3d72bd9",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/2/e/2e929a1808834ca69cb5906fce63e72e_1513140079.jpg",
    order: 53
  },
  {
    _id: "5a9239802b681d13ec7ce373",
    title: "Baby I Told You",
    artists: "MONSTAR",
    link:
      "//zmp3-mp3-s1.zadn.vn/7fcfd4240260eb3eb271/5514198165755367212?authen=exp=1519606885~acl=/7fcfd4240260eb3eb271/*~hmac=d3ee907b75d3ad71c0852f5b315a1283",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/b/ab854c8847aae6fb13135a593bc4d038_1517194951.jpg",
    order: 54
  },
  {
    _id: "5a9239802b681d13ec7ce374",
    title: "Yêu Thương Trọn Vẹn",
    artists: "Hà Anh, Hoàng Rob",
    link:
      "//zmp3-mp3-s1.zadn.vn/fe97725da4194d471408/6028557155604321189?authen=exp=1519608237~acl=/fe97725da4194d471408/*~hmac=372fc4e0957c25e1445553d5694a37ae",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/5/15ca33cb67b60699873fc7ba564382a8_1517477317.png",
    order: 55
  },
  {
    _id: "5a9239802b681d13ec7ce375",
    title: "Vợ Tuyệt Vời Nhất",
    artists: "Vũ Duy Khánh",
    link:
      "//zmp3-mp3-s1.zadn.vn/468d131b685f8101d84e/8586189924719305223?authen=exp=1519614617~acl=/468d131b685f8101d84e/*~hmac=0540be63d608144585561cbee1ab7e6e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/5/6/56449711879e488387c2aeb9c0765a24_1476948179.jpg",
    order: 56
  },
  {
    _id: "5a9239802b681d13ec7ce376",
    title: "Thế Là Tết",
    artists: "Đức Phúc, Hòa Minzy",
    link:
      "//zmp3-mp3-s1.zadn.vn/8bb6f3e726a3cffd96b2/539506281188852576?authen=exp=1519607300~acl=/8bb6f3e726a3cffd96b2/*~hmac=be378eb1c3f70349fed410ed85e8916c",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/5/8/582a6912ac13f6305c9a4bde1d26d55c_1516184139.png",
    order: 57
  },
  {
    _id: "5a9239802b681d13ec7ce377",
    title: "Cạn Cả Nước Mắt",
    artists: "Karik, Thái Trinh",
    link:
      "//zmp3-mp3-s1.zadn.vn/8abc2e2d896960373978/3799330207337094985?authen=exp=1519606945~acl=/8abc2e2d896960373978/*~hmac=5bf4222e4ea52bfc78ceeae502f34551",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/f/ffaa21f0110ad661fe0741b5acb2bf10_1463623700.jpg",
    order: 58
  },
  {
    _id: "5a9239802b681d13ec7ce378",
    title: "Thì Em Vẫn Thế",
    artists: "Tóc Tiên",
    link:
      "//zmp3-mp3-s1.zadn.vn/1c0816adc0e929b770f8/8340569255846823016?authen=exp=1519608823~acl=/1c0816adc0e929b770f8/*~hmac=b139ad37cec132a43f023ea169ea4a9d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1518169106.jpg",
    order: 59
  },
  {
    _id: "5a9239812b681d13ec7ce379",
    title: "Người Em Tìm Kiếm",
    artists: "MIN",
    link:
      "//zmp3-mp3-s1.zadn.vn/c54298404204ab5af215/8385511876450833659?authen=exp=1519612418~acl=/c54298404204ab5af215/*~hmac=89f902d56e768b802a148a3b6793cf35",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/f/ff871b029110696a4681ff89c6658fb5_1505480407.jpg",
    order: 60
  },
  {
    _id: "5a9239812b681d13ec7ce37a",
    title: "Lạ Lùng",
    artists: "Vũ.",
    link:
      "//zmp3-mp3-s1.zadn.vn/d3d79e407004995ac015/188965803224885182?authen=exp=1519617966~acl=/d3d79e407004995ac015/*~hmac=103a327f0c33b5e61c2f52cdef7e88c4",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/8/a8f70ecae845eadbe4495aa99308f3f0_1484296225.png",
    order: 61
  },
  {
    _id: "5a9239812b681d13ec7ce37b",
    title: "Anh Là Của Em",
    artists: "Karik",
    link:
      "//zmp3-mp3-s1.zadn.vn/7b0509b170f599abc0e4/2575907685505638146?authen=exp=1519614787~acl=/7b0509b170f599abc0e4/*~hmac=f268ac94fe7faa7fbb5137cc00e7f3df",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/c/0c2b0067691ef5521afcebe2887028dc_1443425336.jpg",
    order: 62
  },
  {
    _id: "5a9239812b681d13ec7ce37c",
    title: "Người Từng Thương",
    artists: "Chu Bin",
    link:
      "//zmp3-mp3-s1.zadn.vn/19c5b0a465e08cbed5f1/1677475456338886260?authen=exp=1519608989~acl=/19c5b0a465e08cbed5f1/*~hmac=70c5e38be7c5596ac07d0fcb77e71ced",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/a/baa1c140842272b7da210330113d5061_1515573121.jpg",
    order: 63
  },
  {
    _id: "5a9239812b681d13ec7ce37d",
    title: "Em Ơi",
    artists: "Vũ Cát Tường, Hakoota Dũng Hà",
    link:
      "//zmp3-mp3-s1.zadn.vn/9ba930badefe37a06eef/2238521632086674847?authen=exp=1519615991~acl=/9ba930badefe37a06eef/*~hmac=cebb13197c2ff425de89932fe6d5b617",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/5/3/530977cddceefa88d9b0a7ea706f8940_1486698155.jpg",
    order: 64
  },
  {
    _id: "5a9239812b681d13ec7ce37e",
    title: "Em Sẽ Hối Hận",
    artists: "Đình Phong, Tân Zui, Son2m",
    link:
      "//zmp3-mp3-s1.zadn.vn/c09b14b5c1f128af71e0/2610467766552596727?authen=exp=1519615101~acl=/c09b14b5c1f128af71e0/*~hmac=9f20cf3265c094f270ab460e933dc13b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/b/bbfa591ec7e4e0827a0f75be874628e3_1516245938.jpg",
    order: 65
  },
  {
    _id: "5a9239812b681d13ec7ce37f",
    title: "Xuân",
    artists: "Trung Quân Idol, Hoài Lâm, Ali Hoàng Dương, Gin Tuấn Kiệt",
    link:
      "//zmp3-mp3-s1.zadn.vn/99895f39897d6023396c/6407600053901297753?authen=exp=1519613613~acl=/99895f39897d6023396c/*~hmac=acfcbba40c43b89f7efa55b36c8ba96e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/f/ffef5a4c352fca617bb6016b97d2f249_1518409266.png",
    order: 66
  },
  {
    _id: "5a9239812b681d13ec7ce380",
    title: "Cho Em Gần Anh Thêm Chút Nữa (Cho Em Gần Anh Thêm Chút Nữa OST)",
    artists: "Hương Tràm",
    link:
      "//zmp3-mp3-s1.zadn.vn/741e7e1beb5f02015b4e/384440435546464844?authen=exp=1519617593~acl=/741e7e1beb5f02015b4e/*~hmac=b0d387c6a349be6f60d8c0e551cf6043",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/c/cc7ed4169790aa2c71d7c194cb0ee12f_1479986251.jpg",
    order: 67
  },
  {
    _id: "5a9239812b681d13ec7ce381",
    title: "Dù Sai Em Vẫn Yêu Anh",
    artists: "Hạnh Sino",
    link:
      "//zmp3-mp3-s1.zadn.vn/4680f0712535cc6b9524/7382235952584518591?authen=exp=1519605836~acl=/4680f0712535cc6b9524/*~hmac=1749a4b6778a8fb9361d91f4211ac358",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/8/f821714de49becfbdbf93227ce9343c5_1515052489.jpg",
    order: 68
  },
  {
    _id: "5a9239812b681d13ec7ce382",
    title: "Lâu Rồi Sao Vẫn Chưa Quên",
    artists: "Gin Tuấn Kiệt",
    link:
      "//zmp3-mp3-s1.zadn.vn/21bbfc9529d1c08f99c0/5441131960255350591?authen=exp=1519617799~acl=/21bbfc9529d1c08f99c0/*~hmac=902982dbc7c56d7515603782a746b33b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/0/c05d5e704fe4912306bc00a6cdf86b2f_1516275576.jpg",
    order: 69
  },
  {
    _id: "5a9239812b681d13ec7ce383",
    title: "Em Không Là Duy Nhất",
    artists: "Tóc Tiên",
    link:
      "//zmp3-mp3-s1.zadn.vn/ae6d5f37b073592d0062/2746922818588670636?authen=exp=1519617379~acl=/ae6d5f37b073592d0062/*~hmac=08a98f01353924592306644b365ce05e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/6/1648b6e7471b456f8aa2f9f19c93e5be_1488428433.jpg",
    order: 70
  },
  {
    _id: "5a9239812b681d13ec7ce384",
    title: "Gương Mặt Lạ Lẫm",
    artists: "Mr Siro",
    link:
      "//zmp3-mp3-s1.zadn.vn/357ceb7172359b6bc224/4706531562149718908?authen=exp=1519607262~acl=/357ceb7172359b6bc224/*~hmac=926673c395c1afeff10c0bdace6a81a5",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/2/9232c4c99c30f665e9326c8bbbcebc0e_1473419051.jpg",
    order: 71
  },
  {
    _id: "5a9239812b681d13ec7ce385",
    title: "Yêu Một Người Vô Tâm",
    artists: "Bảo Anh",
    link:
      "//zmp3-mp3-s1.zadn.vn/d5874dcdd6893fd76698/5517204188911544620?authen=exp=1519615960~acl=/d5874dcdd6893fd76698/*~hmac=6a888d267ca2603c1626d15e3af8534d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/5/65156425e12485863b4db81da545f314_1476874803.jpg",
    order: 72
  },
  {
    _id: "5a9239812b681d13ec7ce386",
    title: "Anh Đã Quen Với Cô Đơn",
    artists: "Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/b7551701ff45161b4f54/2946979717513932654?authen=exp=1519609725~acl=/b7551701ff45161b4f54/*~hmac=33ec7a0793040f6d3e9a23c06d484123",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/b/ab44498b5b432879428719390baf1180_1490064587.jpg",
    order: 73
  },
  {
    _id: "5a9239812b681d13ec7ce387",
    title: "Tớ Thích Cậu",
    artists: "Han Sara",
    link:
      "//zmp3-mp3-s1.zadn.vn/ed6a85b15ff5b6abefe4/3402857553247889715?authen=exp=1519614636~acl=/ed6a85b15ff5b6abefe4/*~hmac=65b59fd85b6aa34a3f33a98b24a4e392",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/c/dca7dbd284a9550ce0f16f5d0a7bab4f_1502787568.jpg",
    order: 74
  },
  {
    _id: "5a9239812b681d13ec7ce388",
    title: "Đừng Nói Yêu Tôi",
    artists: "Wendy Thảo",
    link:
      "//zmp3-mp3-s1.zadn.vn/3e6da7ac78e891b6c8f9/3312875816527835878?authen=exp=1519614697~acl=/3e6da7ac78e891b6c8f9/*~hmac=176e6fd0a00145968abea96a928e29de",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/e/eed5ab746c182c1f6097df117593052f_1493177156.png",
    order: 75
  },
  {
    _id: "5a9239812b681d13ec7ce389",
    title: "Yêu 5",
    artists: "Rhymastic",
    link:
      "//zmp3-mp3-s1.zadn.vn/3fe01ae2f4a61df844b7/978826610756853978?authen=exp=1519610368~acl=/3fe01ae2f4a61df844b7/*~hmac=9a37e8ba1cb0386e088979b6af0ec666",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/b/5/b5aa78aa102467e5648160a4ac93df8e_1486467660.jpg",
    order: 76
  },
  {
    _id: "5a9239812b681d13ec7ce38a",
    title: "Talk To Me (Có Nên Dừng Lại?)",
    artists: "Chi Pu",
    link:
      "//zmp3-mp3-s1.zadn.vn/b1405648820c6b52321d/1079429225112795225?authen=exp=1519604544~acl=/b1405648820c6b52321d/*~hmac=19733823d52752ff50448dab9caea048",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/5/d5cbb0c38968891e70551b370c8106d1_1513848565.jpg",
    order: 77
  },
  {
    _id: "5a9239812b681d13ec7ce38b",
    title: "Thương",
    artists: "Karik, Uyên Pím (Bệt Band)",
    link:
      "//zmp3-mp3-s1.zadn.vn/5afa1d86bcc2559c0cd3/1130595455019899268?authen=exp=1519607150~acl=/5afa1d86bcc2559c0cd3/*~hmac=36ce61ee3d20feb6fb5f966b35934f6f",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/3/a3899970ba81b55deba986ab82ee69d7_1453947783.jpg",
    order: 78
  },
  {
    _id: "5a9239812b681d13ec7ce38c",
    title: "Yêu Chưa Bao Giờ Là Sai",
    artists: "ERIK",
    link:
      "//zmp3-mp3-s1.zadn.vn/f5186d98b9dc508209cd/5248224148666182581?authen=exp=1519616453~acl=/f5186d98b9dc508209cd/*~hmac=6e79ebbca4733a0005b50539ffb0a982",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/3/93c91b68709bf04c021f54fc1ea58959_1513131914.jpg",
    order: 79
  },
  {
    _id: "5a9239812b681d13ec7ce38d",
    title: "Vài Tháng Sau",
    artists: "JayKii",
    link:
      "//zmp3-mp3-s1.zadn.vn/897f0e90dad4338a6ac5/3584574700957171723?authen=exp=1519616190~acl=/897f0e90dad4338a6ac5/*~hmac=72977a8e6f0c95c081d328dcce45740d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1510309293.jpg",
    order: 80
  },
  {
    _id: "5a9239812b681d13ec7ce38e",
    title: "Cảm Nắng",
    artists: "Suni Hạ Linh, RTee",
    link:
      "//zmp3-mp3-s1.zadn.vn/26230b7fd23b3b65622a/4055912579208029048?authen=exp=1519616466~acl=/26230b7fd23b3b65622a/*~hmac=9d1c4f2ec7bacf73099534390ee3c7da",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/3/3/33f82ade1abad8bf799b3103bf21d9aa_1500626950.jpg",
    order: 81
  },
  {
    _id: "5a9239812b681d13ec7ce38f",
    title: "Không Còn Bình Yên",
    artists: "Juun Đăng Dũng",
    link:
      "//zmp3-mp3-s1.zadn.vn/32505b4b8f0f66513f1e/3654101183286616276?authen=exp=1519610948~acl=/32505b4b8f0f66513f1e/*~hmac=b499c1ed5466c6f11a8c1a5afe80a617",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/9/19c75f0bfa09926ef4a67765dcc00f3b_1514276511.jpg",
    order: 82
  },
  {
    _id: "5a9239812b681d13ec7ce390",
    title: "Buồn Của Em (Buồn Của Anh Cover)",
    artists: "Trương Linh Đan",
    link:
      "//zmp3-mp3-s1.zadn.vn/54f683155651bf0fe640/6322504999759720834?authen=exp=1519610788~acl=/54f683155651bf0fe640/*~hmac=f3055f7e5b5935cf29da8c876764c532",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/c/e/ce36593e00aa2f001c8f08968e3bf637_1514728297.jpg",
    order: 83
  },
  {
    _id: "5a9239812b681d13ec7ce391",
    title: "Chuyến Đi Của Năm (Đi Để Trở Về 2)",
    artists: "Soobin Hoàng Sơn",
    link:
      "//zmp3-mp3-s1.zadn.vn/637c919644d2ad8cf4c3/1624570559039363465?authen=exp=1519615694~acl=/637c919644d2ad8cf4c3/*~hmac=3054e48d45f80a333189827ca8ba8732",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/5/3/531a73c8d39095bfe95abc2bd5881aa7_1514540094.png",
    order: 84
  },
  {
    _id: "5a9239812b681d13ec7ce392",
    title: "Kết Thúc Lâu Rồi",
    artists: "Lê Bảo Bình",
    link:
      "//zmp3-mp3-s1.zadn.vn/b6304a1b955f7c01254e/2107217537171129512?authen=exp=1519605506~acl=/b6304a1b955f7c01254e/*~hmac=ac3624924fbd8ae4c114bde84822439d",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/avatars/d/7/d792e1f248262cea4ff433ba8256d427_1479694390.jpg",
    order: 85
  },
  {
    _id: "5a9239812b681d13ec7ce393",
    title: "Chia Tay (Original Version By Hải Âu)",
    artists: "Bùi Anh Tuấn",
    link:
      "//zmp3-mp3-s1.zadn.vn/d6ade15e3a1ad3448a0b/3067141731979981036?authen=exp=1519615749~acl=/d6ade15e3a1ad3448a0b/*~hmac=8fd3549f75f6cd3dee76397bc0695c12",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1506072484.jpg",
    order: 86
  },
  {
    _id: "5a9239812b681d13ec7ce394",
    title: "Giá Như Anh",
    artists: "JayKii",
    link:
      "//zmp3-mp3-s1.zadn.vn/7420db140e50e70ebe41/7473295602454374422?authen=exp=1519605461~acl=/7420db140e50e70ebe41/*~hmac=7172b48f396d27f1b96ea9b0f38ca354",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/7/8/78938b5d22fccdd0eb4572133c2a48af_1516193625.jpg",
    order: 87
  },
  {
    _id: "5a9239812b681d13ec7ce395",
    title: "Chỉ Bằng Cái Gật Đầu",
    artists: "Yan Nguyễn",
    link:
      "//zmp3-mp3-s1.zadn.vn/003170eea8aa41f418bb/3950391704103559720?authen=exp=1519617026~acl=/003170eea8aa41f418bb/*~hmac=58148c4f7111d655e4aa2f71526467e0",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/9/d/9dca47c7a31744400935c9405900df1c_1498726562.jpg",
    order: 88
  },
  {
    _id: "5a9239812b681d13ec7ce396",
    title: "Buồn Của Anh (Masew Mix)",
    artists: "Masew, Đạt G, K-ICM",
    link:
      "//zmp3-mp3-s1.zadn.vn/a67fb67b623f8b61d22e/7232145538343963805?authen=exp=1519610651~acl=/a67fb67b623f8b61d22e/*~hmac=dc3c92ef82e0e6d0090a56fc67391065",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/0/c/0c2187d0f119c5c8b291b7222dc5d599_1514265433.jpg",
    order: 89
  },
  {
    _id: "5a9239812b681d13ec7ce397",
    title: "Lắng Nghe Nước Mắt",
    artists: "Mr Siro",
    link:
      "//zmp3-mp3-s1.zadn.vn/29923f67b823517d0832/1668834566220689309?authen=exp=1519608342~acl=/29923f67b823517d0832/*~hmac=93b2c857f71a13fe7cd6934cf1a570cc",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/6/8655400b95bb6416d07e8221567fa10f_1349062992.jpg",
    order: 90
  },
  {
    _id: "5a9239812b681d13ec7ce398",
    title: "Thất Tình",
    artists: "Trịnh Đình Quang",
    link:
      "//zmp3-mp3-s1.zadn.vn/8832bfbbb6ff5fa106ee/9192542311448291847?authen=exp=1519607893~acl=/8832bfbbb6ff5fa106ee/*~hmac=04d575d0089d6f94b99f43bbdb24221f",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/avatars/8/5/85b4710d31d2806e237269c1063f7358_1462333009.jpg",
    order: 91
  },
  {
    _id: "5a9239812b681d13ec7ce399",
    title: "Năm Ấy",
    artists: "Đức Phúc",
    link:
      "//zmp3-mp3-s1.zadn.vn/cafbeab73ef3d7ad8ee2/4214375802087424381?authen=exp=1519612269~acl=/cafbeab73ef3d7ad8ee2/*~hmac=55765206560bbf22f09def796ef2226b",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/1/e/1e6ae4ada992769567b71815f124fac5_1512784134.jpg",
    order: 92
  },
  {
    _id: "5a9239822b681d13ec7ce39a",
    title: "Em Thật Là Ngốc",
    artists: "Gia Huy",
    link:
      "//zmp3-mp3-s1.zadn.vn/5bcb6ad1b19558cb0184/780367631468441727?authen=exp=1519614518~acl=/5bcb6ad1b19558cb0184/*~hmac=7d61c6c26c45ced90f42afb70a4d2111",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/8/4/8453489e103baa047601c23cbb899991_1509939471.jpg",
    order: 93
  },
  {
    _id: "5a9239822b681d13ec7ce39b",
    title: "Để Cho Anh Khóc",
    artists: "Gia Huy",
    link:
      "//zmp3-mp3-s1.zadn.vn/49ced2ac06e8efb6b6f9/7825412818464596397?authen=exp=1519612433~acl=/49ced2ac06e8efb6b6f9/*~hmac=f38f690498647e96748c262ca52640b2",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/7/5/7536f3b2a1d852cd990df327c906e3b6_1512375783.jpg",
    order: 94
  },
  {
    _id: "5a9239822b681d13ec7ce39c",
    title: "Ghen",
    artists: "Khắc Hưng, ERIK, MIN",
    link:
      "//zmp3-mp3-s1.zadn.vn/3c8c0971d135386b6124/9159096744558092578?authen=exp=1519612960~acl=/3c8c0971d135386b6124/*~hmac=e41fbb1164cffdd2b04b9b0e7ef1c368",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/d/0/d05f9b3c87cf7ccda468174b28757489_1495770525.jpg",
    order: 95
  },
  {
    _id: "5a9239822b681d13ec7ce39d",
    title: "Hỏi Thăm Nhau",
    artists: "Lê Bảo Bình",
    link:
      "//zmp3-mp3-s1.zadn.vn/e92906f793b37aed23a2/3280010726320456534?authen=exp=1519613428~acl=/e92906f793b37aed23a2/*~hmac=27478a953beeef2de994ccdc3197b1f5",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/a/5/a55db8b18b37cb07be9a4a5f1903cae1_1479465454.png",
    order: 96
  },
  {
    _id: "5a9239822b681d13ec7ce39e",
    title: "1234",
    artists: "Chi Dân",
    link:
      "//zmp3-mp3-s1.zadn.vn/e7563f83e7c70e9957d6/727637092126384063?authen=exp=1519615246~acl=/e7563f83e7c70e9957d6/*~hmac=68b9a9ee78d01d018a2b5bd1dddc06cc",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/6/8/688121b645595c52402a0c6ae56700fd_1496315778.jpg",
    order: 97
  },
  {
    _id: "5a9239822b681d13ec7ce39f",
    title: "Em Ngày Xưa Khác Rồi",
    artists: "Hiền Hồ",
    link:
      "//zmp3-mp3-s1.zadn.vn/b3c424ccff8816d64f99/5246490988379510936?authen=exp=1519612809~acl=/b3c424ccff8816d64f99/*~hmac=7588f0a053b839446deaada301f1478e",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/4/f/4f33a5712c26714f0a1e7177d0b4129d_1509608464.jpg",
    order: 98
  },
  {
    _id: "5a9239822b681d13ec7ce3a0",
    title: "Em Biết",
    artists: "Trịnh Đình Quang",
    link:
      "//zmp3-mp3-s1.zadn.vn/846f7f2ca4684d361479/2129072780979292263?authen=exp=1519618165~acl=/846f7f2ca4684d361479/*~hmac=b6dde291a5af11df5e778ae0f095035a",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/e/4/e4ad98e7656f451b0c9eba0aa03c7ddb_1508489928.jpg",
    order: 99
  },
  {
    _id: "5a9239822b681d13ec7ce3a1",
    title: "Có Em Chờ",
    artists: "Min, Mr.A",
    link:
      "//zmp3-mp3-s1.zadn.vn/3292444e9b0a72542b1b/6792228024536335773?authen=exp=1519609017~acl=/3292444e9b0a72542b1b/*~hmac=b7bc1404be0e46febdf2b5f7aa2fc5a0",
    thumb:
      "https://zmp3-photo.zadn.vn/thumb/94_94/covers/f/3/f3ccdd27d2000e3f9255a7e3e2c48800_1493277779.jpg",
    order: 100
  }
];
          // const url = "./json/test.json";
          // fetch(url)
          //   .then(resp => resp.json())
          //   .then(function(bigData) {

          //      daTaSongs = bigData.items;
          // });

//This would be performed on the server in a real app. Just stubbing in.

class SongsApi {
  static GetAllSongs() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], daTaSongs));
      }, 1000);
    });
  }

}

export default SongsApi;
