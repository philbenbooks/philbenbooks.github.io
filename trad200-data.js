const ITEMS = [
  {
    "page": "152",
    "artist": "Izhar Cohen",
    "title": "Abanibi-Eurovision 78",
    "href": "https://youtu.be/pOH-sojmLJY",
    "note": 2
  },
  {
    "page": "23",
    "artist": "Shlomi Shabat",
    "title": "Abba",
    "href": "https://www.youtube.com/watch?v=6Wtoiy3BqJw",
    "note": 4
  },
  {
    "page": "30",
    "artist": "Shalom Hanoch",
    "title": "Adam betokh Atsmo",
    "href": "https://www.youtube.com/watch?v=vjEbQr56ty4",
    "note": 1
  },
  {
    "page": "65",
    "artist": "Avihou Medina",
    "title": "Adon haSelihot",
    "href": "https://www.youtube.com/watch?v=fmQ0oOQM-8w",
    "note": 3
  },
  {
    "page": "89",
    "artist": "Uzi Hitman",
    "title": "Adon Olam",
    "href": "https://www.youtube.com/watch?v=v6MfMZ7x028",
    "note": 3
  },
  {
    "page": "119",
    "artist": "Yehudit Ravitz",
    "title": "Akhchav Hakol Beseder",
    "href": "https://www.youtube.com/watch?v=93x_LZcSlCI",
    "note": 2
  },
  {
    "page": "120",
    "artist": "Rivka Zohar",
    "title": "Al Kappav Yavi",
    "href": "https://www.youtube.com/watch?v=1EsAQ2mxYMw",
    "note": 1
  },
  {
    "page": "52",
    "artist": "Yossi Banai",
    "title": "Al Kol Eleh",
    "href": "https://www.youtube.com/watch?v=9xETAic8buQ",
    "note": 1
  },
  {
    "page": "168",
    "artist": "Avihou Medina",
    "title": "Al Tira Israel",
    "href": "https://www.youtube.com/watch?v=h1vuHwHZ8zk",
    "note": 3
  },
  {
    "page": "156",
    "artist": "Halav ouDvach",
    "title": "Alléluia-Eurovision 79",
    "href": "https://www.youtube.com/watch?v=C33kO3fvjkI",
    "note": 2
  },
  {
    "page": "179",
    "artist": "Sarit Hadad",
    "title": "Amen",
    "href": "https://www.youtube.com/watch?v=X6z2fK_BF7k",
    "note": 4
  },
  {
    "page": "200",
    "artist": "Ovadia Hamama",
    "title": "Ana Bekoach",
    "href": "https://www.youtube.com/watch?v=70I6ihs1xoA",
    "note": 3
  },
  {
    "page": "16",
    "artist": "Ninet Tayeb",
    "title": "Anassikh hakatan",
    "href": "https://www.youtube.com/watch?v=_2mBJhGe2zY",
    "note": 1
  },
  {
    "page": "127",
    "artist": "Benny Amdursky",
    "title": "Ani Guitarra",
    "href": "https://www.youtube.com/watch?v=Uq04rNxtwYw",
    "note": 2
  },
  {
    "page": "105",
    "artist": "Rita",
    "title": "Ani Haya Li MiYomLeYom",
    "href": "https://www.youtube.com/watch?v=M8qfRZ5w2qY",
    "note": 4
  },
  {
    "page": "60",
    "artist": "Shlomo Artzi",
    "title": "Ani Nossé Imi",
    "href": "https://www.youtube.com/watch?v=Xfl4o1QDG9I",
    "note": 0
  },
  {
    "page": "124",
    "artist": "Arik Einstein",
    "title": "Ani ve Ata",
    "href": "https://www.youtube.com/watch?v=ETqJxlBrQbc",
    "note": 1
  },
  {
    "page": "83",
    "artist": "Yossi Banai",
    "title": "Ani veSimon veMoisehaKatan",
    "href": "https://www.youtube.com/watch?v=4uDy_A8zXPM",
    "note": 1
  },
  {
    "page": "136",
    "artist": "Yehudit Ravitz",
    "title": "Arba lifnot Boker",
    "href": "https://www.youtube.com/watch?v=y9E2fkwV638",
    "note": 2
  },
  {
    "page": "130",
    "artist": "Yardena Arazi",
    "title": "Ata Li Eretz",
    "href": "https://www.youtube.com/watch?v=w8PNR_YF9Xw",
    "note": 2
  },
  {
    "page": "40",
    "artist": "Nourit Galron",
    "title": "Ata Po Hasser li",
    "href": "https://www.youtube.com/watch?v=LClQQ8WwRO0",
    "note": 2
  },
  {
    "page": "132",
    "artist": "Sarit Hadad",
    "title": "Ata Totah",
    "href": "https://www.youtube.com/watch?v=X_388pbOap0",
    "note": 4
  },
  {
    "page": "167",
    "artist": "Ilanit",
    "title": "Bachana Habaha",
    "href": "https://www.youtube.com/watch?v=5FNEg0B5I1c",
    "note": 1
  },
  {
    "page": "218",
    "artist": "Yehudit Ravitz",
    "title": "Baha mehahava",
    "href": "https://www.youtube.com/watch?v=zUNPxTNxVoc",
    "note": 2
  },
  {
    "page": "134",
    "artist": "Kobi Peretz",
    "title": "Balbeli Oto",
    "href": "https://www.youtube.com/watch?v=06IrarkJBCQ",
    "note": 2
  },
  {
    "page": "88",
    "artist": "Oshik Levi",
    "title": "Ballada La Choter",
    "href": "https://www.youtube.com/watch?v=WttWfsL_H6k",
    "note": 1
  },
  {
    "page": "22",
    "artist": "Yehoram Gaon",
    "title": "Ballada la Hovech",
    "href": "https://www.youtube.com/watch?v=RAUaQH-MRes",
    "note": 1
  },
  {
    "page": "159",
    "artist": "Shimi Tavori",
    "title": "Barchenu",
    "href": "https://www.youtube.com/watch?v=bJWQFzGLYy0",
    "note": 3
  },
  {
    "page": "128",
    "artist": "Lahakat Pikoud Merkaz",
    "title": "BeEretz Ahavati",
    "href": "https://www.youtube.com/watch?v=Z9PHPKYocmg",
    "note": 0
  },
  {
    "page": "85",
    "artist": "Arik Einstein",
    "title": "Beit haArava",
    "href": "https://www.youtube.com/watch?v=7f1K2GwLZbA",
    "note": 2
  },
  {
    "page": "219",
    "artist": "Idan Raichel",
    "title": "Bekarov",
    "href": "https://www.youtube.com/watch?v=G-gpjRer6BU",
    "note": 2
  },
  {
    "page": "135",
    "artist": "Shlomi Shabat",
    "title": "Berechit Olam",
    "href": "https://www.youtube.com/watch?v=GYLU9leTAjE",
    "note": 3
  },
  {
    "page": "17",
    "artist": "Shlomi Shabat",
    "title": "Biglal harouah",
    "href": "https://www.youtube.com/watch?v=nli5tcVRjG4",
    "note": 3
  },
  {
    "page": "87",
    "artist": "aNechamot aTehorot",
    "title": "Birehov aNechamot",
    "href": "https://www.youtube.com/watch?v=LcxeE3t4dHU",
    "note": 2
  },
  {
    "page": "172",
    "artist": "Sarit Hadad",
    "title": "Bli cheBikachti",
    "href": "https://www.youtube.com/watch?v=opwdAAgbJYI",
    "note": 4
  },
  {
    "page": "210",
    "artist": "Matti Caspi",
    "title": "Brit Olam",
    "href": "https://www.youtube.com/watch?v=1mieEeD0Kfk",
    "note": 1
  },
  {
    "page": "20",
    "artist": "Yehudit Ravitz",
    "title": "Chabatot veHaguim",
    "href": "https://www.youtube.com/watch?v=tFXS9krT2VY",
    "note": 1
  },
  {
    "page": "109",
    "artist": "Meir Banai",
    "title": "Chahar haRahamim",
    "href": "https://www.youtube.com/watch?v=9vweQZfJKBo",
    "note": 1
  },
  {
    "page": "71",
    "artist": "Yehoram Gaon",
    "title": "Chalom Eretz Nehederet",
    "href": "https://www.youtube.com/watch?v=9do5BnlqXLs",
    "note": 1
  },
  {
    "page": "94",
    "artist": "Arik Einstein",
    "title": "Chalom Haver",
    "href": "https://www.youtube.com/watch?v=J6Oq6rDyErU",
    "note": 1
  },
  {
    "page": "10",
    "artist": "Haguachach hakhiver",
    "title": "Chalom Kita aleph",
    "href": "https://parisoftnet.securesitefr.com/pb/ShaKitaAleph.mp4",
    "note": 1
  },
  {
    "page": "142",
    "artist": "Hava Alberstein",
    "title": "Cham Haré Golan",
    "href": "https://www.youtube.com/watch?v=_hR3Y21yc8Q",
    "note": 0
  },
  {
    "page": "182",
    "artist": "Omer Adam",
    "title": "Cheket",
    "href": "https://www.youtube.com/watch?v=Ujt222uNSfg",
    "note": 4
  },
  {
    "page": "46",
    "artist": "Ilanit",
    "title": "Chir chel Yom Houlin",
    "href": "https://www.youtube.com/watch?v=_Sx3he4ABw0",
    "note": 1
  },
  {
    "page": "193",
    "artist": "Hava Alberstein",
    "title": "Chir Eretz",
    "href": "https://www.youtube.com/watch?v=ZtxEIY7hmJQ",
    "note": 0
  },
  {
    "page": "74",
    "artist": "Ofra Haza",
    "title": "Chir Hafreha",
    "href": "https://www.youtube.com/watch?v=SueQ5XWKGLY",
    "note": 4
  },
  {
    "page": "133",
    "artist": "Shlomo Artzi",
    "title": "Chir Hayal",
    "href": "https://www.youtube.com/watch?v=PWNGGfiuBoo",
    "note": 1
  },
  {
    "page": "38",
    "artist": "Lahakat HanaHal",
    "title": "Chir la Chalom",
    "href": "https://www.youtube.com/watch?v=d4JyiXsta10",
    "note": 1
  },
  {
    "page": "158",
    "artist": "Omer Adam",
    "title": "Chir LaMaalot",
    "href": "https://www.youtube.com/watch?v=npNAjsobcao",
    "note": 3
  },
  {
    "page": "202",
    "artist": "Yehudit Ravitz",
    "title": "Chir lelo Chem",
    "href": "https://www.youtube.com/watch?v=doh10LVsJYA",
    "note": 1
  },
  {
    "page": "36",
    "artist": "Hava Alberstein",
    "title": "Chir Michmar",
    "href": "https://www.youtube.com/watch?v=RKNIgtKeKfc",
    "note": 0
  },
  {
    "page": "29",
    "artist": "Hava Alberstein",
    "title": "Chir Tichri",
    "href": "https://www.youtube.com/watch?v=I166985NY5w",
    "note": 1
  },
  {
    "page": "61",
    "artist": "David D'or",
    "title": "Chmor al Haolam yeled",
    "href": "https://www.youtube.com/watch?v=TXKicxkxYFs",
    "note": 2
  },
  {
    "page": "178",
    "artist": "Omer Adam",
    "title": "Chné mechouguaim",
    "href": "https://www.youtube.com/watch?v=WLMmX17D2uw",
    "note": 2
  },
  {
    "page": "18",
    "artist": "Lahakat Pikoud Merkaz",
    "title": "Chomer Hahomot",
    "href": "https://www.youtube.com/watch?v=pS2rl8q3epg",
    "note": 1
  },
  {
    "page": "117",
    "artist": "Arik Sinai-Hava Alberstein",
    "title": "Chouv",
    "href": "https://www.youtube.com/watch?v=4X6yYAHKQY4",
    "note": 1
  },
  {
    "page": "118",
    "artist": "Shalom Hanoch",
    "title": "Déja vu",
    "href": "https://www.youtube.com/watch?v=es14YU1lgd4",
    "note": 2
  },
  {
    "page": "8",
    "artist": "Peer Tasi",
    "title": "Derekh haChalom",
    "href": "https://www.youtube.com/watch?v=VD9F_7N_MbI",
    "note": 2
  },
  {
    "page": "157",
    "artist": "Dana International",
    "title": "Diva-Eurovision 1998",
    "href": "https://www.youtube.com/watch?v=huVww6TZoUw",
    "note": 2
  },
  {
    "page": "192",
    "artist": "Arik Einstein",
    "title": "Doudou",
    "href": "https://www.youtube.com/watch?v=N5FmrWzKZw0",
    "note": 1
  },
  {
    "page": "154",
    "artist": "Yehuda Poliker",
    "title": "Efer veHavak",
    "href": "https://www.youtube.com/watch?v=1FwSKM_GlkE",
    "note": 1
  },
  {
    "page": "78",
    "artist": "Arik Einstein",
    "title": "Ein Guedi",
    "href": "https://www.youtube.com/watch?v=FL8mIQqjtEs",
    "note": 1
  },
  {
    "page": "57",
    "artist": "Shlomi Shabat",
    "title": "Ein Hod miLevado",
    "href": "https://www.youtube.com/watch?v=T_x5_OnpjsI",
    "note": 3
  },
  {
    "page": "50",
    "artist": "Corinne Allal",
    "title": "Ein li Eretz aHeret",
    "href": "https://www.youtube.com/watch?v=5rlHA21a05c",
    "note": 1
  },
  {
    "page": "214",
    "artist": "Hachalonot Hagvohim",
    "title": "Einekh Yekhola",
    "href": "https://www.youtube.com/watch?v=lYxQ5sqpTxY",
    "note": 1
  },
  {
    "page": "175",
    "artist": "Orchestre Andalou",
    "title": "El Nora Alila",
    "href": "https://www.youtube.com/watch?v=H8vcI8mpW7M",
    "note": 3
  },
  {
    "page": "67",
    "artist": "Ofra Haza",
    "title": "Elie, Elie",
    "href": "https://www.youtube.com/watch?v=l-5HJYMzafo",
    "note": 0
  },
  {
    "page": "39",
    "artist": "Matti Caspi",
    "title": "Eliezer Ben-Yehudah",
    "href": "https://www.youtube.com/watch?v=Jt2gLGvLKW0",
    "note": 1
  },
  {
    "page": "146",
    "artist": "Eyal Golan",
    "title": "Elohai, Elohai",
    "href": "https://www.youtube.com/watch?v=BT5A7NdyMss",
    "note": 4
  },
  {
    "page": "126",
    "artist": "Hani",
    "title": "Elohim Natan Lekha beMatana",
    "href": "https://www.youtube.com/watch?v=fByTxfs9jDc",
    "note": 1
  },
  {
    "page": "206",
    "artist": "Hadoudaim",
    "title": "Erev chel Shoshanim",
    "href": "https://www.youtube.com/watch?v=mXFRmCxYSIY",
    "note": 1
  },
  {
    "page": "204",
    "artist": "Yossi Banai",
    "title": "Erev Ironi",
    "href": "https://www.youtube.com/watch?v=2kNlGMaNsY4",
    "note": 0
  },
  {
    "page": "95",
    "artist": "Shay-Li Atari",
    "title": "Etzlenou baGan",
    "href": "https://www.youtube.com/watch?v=Y05rqt0YHtw",
    "note": 1
  },
  {
    "page": "114",
    "artist": "Boaz Charabi",
    "title": "Etzli aKol Beseder",
    "href": "https://www.youtube.com/watch?v=5HNJ3QuX90c",
    "note": 4
  },
  {
    "page": "121",
    "artist": "Arik Sinai",
    "title": "Gan Hashikmim",
    "href": "https://www.youtube.com/watch?v=Gu8LSHeCbFk",
    "note": 1
  },
  {
    "page": "194",
    "artist": "LaHakat Pikoud Merkaz",
    "title": "Guivat HaTakhmochet",
    "href": "https://www.youtube.com/watch?v=PdzUCvmoPCw",
    "note": 1
  },
  {
    "page": "165",
    "artist": "Chorale",
    "title": "Hachkediya poharat",
    "href": "https://www.youtube.com/watch?v=PhtVqHpXFpw",
    "note": 1
  },
  {
    "page": "42",
    "artist": "Sarit Hadad",
    "title": "Hachlayot metoukot",
    "href": "https://www.youtube.com/watch?v=V4r92PMEdcM",
    "note": 4
  },
  {
    "page": "84",
    "artist": "Arik Einstein",
    "title": "Hachnissini Tachat Knafech",
    "href": "https://www.youtube.com/watch?v=KmZ2H11cBu0",
    "note": 0
  },
  {
    "page": "116",
    "artist": "Rivka Zohar",
    "title": "HaDerekh el haKfar",
    "href": "https://www.youtube.com/watch?v=hNbmKPiMkD8",
    "note": 1
  },
  {
    "page": "187",
    "artist": "Ariel Zylber",
    "title": "Haggadah Yapanit",
    "href": "https://www.youtube.com/watch?v=jf16c4BVIwQ",
    "note": 1
  },
  {
    "page": "209",
    "artist": "Arik Einstein",
    "title": "Hahava mi Mabat Rishon",
    "href": "https://www.youtube.com/watch?v=e6YRMd6-q78",
    "note": 1
  },
  {
    "page": "183",
    "artist": "Shlomo Artzi",
    "title": "Hahavtia, Pitom Akhchav",
    "href": "https://www.youtube.com/watch?v=19qoWmBJVRc",
    "note": 1
  },
  {
    "page": "188",
    "artist": "Shlomo Artzi",
    "title": "HaHish HaHouh",
    "href": "https://www.youtube.com/watch?v=-OxHLvDFxys",
    "note": 1
  },
  {
    "page": "201",
    "artist": "Hava Alberstein",
    "title": "HaHita Tsomakhat Chouv",
    "href": "https://www.youtube.com/watch?v=uPm1toXOUi8",
    "note": 1
  },
  {
    "page": "166",
    "artist": "Ofra Haza",
    "title": "Hai Am Israel Hai",
    "href": "https://www.youtube.com/watch?v=bMWtN4FMz0k",
    "note": 4
  },
  {
    "page": "145",
    "artist": "Maya Bouskila",
    "title": "HaLev",
    "href": "https://www.youtube.com/watch?v=T5umnAkoxeo",
    "note": 2
  },
  {
    "page": "11",
    "artist": "Hava Alberstein",
    "title": "Halomot Chmourim",
    "href": "https://www.youtube.com/watch?v=JPP5QPcMe08",
    "note": 1
  },
  {
    "page": "122",
    "artist": "Boaz Charabi",
    "title": "Halvaii",
    "href": "https://www.youtube.com/watch?v=Px1PLCKg7LI",
    "note": 4
  },
  {
    "page": "26",
    "artist": "Yehoram Gaon",
    "title": "Hamilkhama haakhrona",
    "href": "https://www.youtube.com/watch?v=XDMAjn3UOu4",
    "note": 1
  },
  {
    "page": "190",
    "artist": "Shlomo Artzi",
    "title": "Hardoufim",
    "href": "https://www.youtube.com/watch?v=jl5uOClGcWQ",
    "note": 0
  },
  {
    "page": "150",
    "artist": "Yehoram Gaon",
    "title": "HaRehout",
    "href": "https://www.youtube.com/watch?v=XE4t5im8UMA",
    "note": 1
  },
  {
    "page": "140",
    "artist": "Hachalonot Hagvohim",
    "title": "Hatichma Koli",
    "href": "https://www.youtube.com/watch?v=9nkCDDaMEh0",
    "note": 0
  },
  {
    "page": "14",
    "artist": "Haim Moche",
    "title": "Hatmounot che be album",
    "href": "https://www.youtube.com/watch?v=PhoCmqtlsek",
    "note": 1
  },
  {
    "page": "68",
    "artist": "Arik Einstein",
    "title": "Hatour Mitzkheh",
    "href": "https://www.youtube.com/watch?v=5DurEQZS9YQ",
    "note": 0
  },
  {
    "page": "13",
    "artist": "Esther Ofarim",
    "title": "Hayou Leilot",
    "href": "https://www.youtube.com/watch?v=neZHpWExqwQ",
    "note": 0
  },
  {
    "page": "72",
    "artist": "Hakevess Hachicha Assar",
    "title": "Heikh chir Nolad",
    "href": "https://www.youtube.com/watch?v=uAtpJBD1vuQ",
    "note": 1
  },
  {
    "page": "76",
    "artist": "Arik Einstein",
    "title": "Hen Hefchar, c'est possible",
    "href": "https://www.youtube.com/watch?v=M1Csf4H-T2U",
    "note": 1
  },
  {
    "page": "143",
    "artist": "Omer Adam",
    "title": "Hi rak rotza lirkod",
    "href": "https://www.youtube.com/watch?v=h0SuqxOe1Bs",
    "note": 2
  },
  {
    "page": "199",
    "artist": "Shlomo Artzi",
    "title": "Hih lo yodaat mah over Alai",
    "href": "https://www.youtube.com/watch?v=IpFzWxAoUOk",
    "note": 1
  },
  {
    "page": "77",
    "artist": "Ilan-Ilanit",
    "title": "Hineh lo Yanoum ve lo Ychan",
    "href": "https://www.youtube.com/watch?v=hkqCzWNjNiY",
    "note": 3
  },
  {
    "page": "101",
    "artist": "Yehoram Gaon",
    "title": "Hineni Kahn",
    "href": "https://www.youtube.com/watch?v=ijPL6Yi8VRM",
    "note": 1
  },
  {
    "page": "171",
    "artist": "Eyal Golan",
    "title": "Histakeli Elai",
    "href": "https://www.youtube.com/watch?v=M71qBXtvURY",
    "note": 4
  },
  {
    "page": "155",
    "artist": "Idan Yaniv",
    "title": "Hochev Haleha",
    "href": "https://www.youtube.com/watch?v=sPEhpMQZDCg",
    "note": 2
  },
  {
    "page": "181",
    "artist": "Shlomo Carlebach",
    "title": "Hod Yechamah",
    "href": "https://www.youtube.com/watch?v=zhcUi4aa4k8",
    "note": 3
  },
  {
    "page": "111",
    "artist": "Hava Alberstein",
    "title": "Hofim hem Lifhamim",
    "href": "https://www.youtube.com/watch?v=LacSJOqvCyM",
    "note": 0
  },
  {
    "page": "49",
    "artist": "Lahakat HanaHal",
    "title": "Horchat Eucalyptus",
    "href": "https://www.youtube.com/watch?v=TFIrOcriazY",
    "note": 1
  },
  {
    "page": "177",
    "artist": "Arik Einstein",
    "title": "Houh lo Yada eth chema",
    "href": "https://www.youtube.com/watch?v=-Uz_gDkYnWk",
    "note": 1
  },
  {
    "page": "217",
    "artist": "Ben Snof",
    "title": "Im echkakheh Yerushalaim",
    "href": "https://www.youtube.com/watch?v=0bkexOldqhI",
    "note": 3
  },
  {
    "page": "15",
    "artist": "Avi Grayinik",
    "title": "Ima chel Nadav",
    "href": "https://www.youtube.com/watch?v=HlfVUzW8sHU",
    "note": 2
  },
  {
    "page": "43",
    "artist": "Shlomo Artzi",
    "title": "Islande-les 5 doigts de la main",
    "href": "https://www.youtube.com/watch?v=zaZUNFPmFB0",
    "note": 2
  },
  {
    "page": "131",
    "artist": "Ethnix",
    "title": "Jessica",
    "href": "https://www.youtube.com/watch?v=4xkBrGeRkQE",
    "note": 2
  },
  {
    "page": "162",
    "artist": "Amir Haddad",
    "title": "Kacheh LimTso Milim",
    "href": "https://www.youtube.com/watch?v=HlyoWEb2RAU",
    "note": 2
  },
  {
    "page": "197",
    "artist": "Hava Alberstein",
    "title": "Kalaniot",
    "href": "https://www.youtube.com/watch?v=JthvHM591w4",
    "note": 0
  },
  {
    "page": "104",
    "artist": "Yonatan Razel",
    "title": "Katonti",
    "href": "https://www.youtube.com/watch?v=HZYivKwVmJc",
    "note": 3
  },
  {
    "page": "106",
    "artist": "Shlomo Ydov",
    "title": "Kemo Adam",
    "href": "https://www.youtube.com/watch?v=An9nyZP1x64",
    "note": 2
  },
  {
    "page": "86",
    "artist": "Doron Mazar",
    "title": "Kemo cheAt-Comme toi",
    "href": "https://www.youtube.com/watch?v=h8-59SEWrF0",
    "note": 2
  },
  {
    "page": "189",
    "artist": "Ofra Haza",
    "title": "Kemo Tsipor",
    "href": "https://www.youtube.com/watch?v=BiEHq2Qn6C8",
    "note": 4
  },
  {
    "page": "34",
    "artist": "Hava Alberstein",
    "title": "Kemo Tzemach Bar",
    "href": "https://www.youtube.com/watch?v=mUQPGsjHXZY",
    "note": 1
  },
  {
    "page": "28",
    "artist": "Rami Kleinstein",
    "title": "Kol ma che tirtzi",
    "href": "https://www.youtube.com/watch?v=IkDqJEQAntc",
    "note": 2
  },
  {
    "page": "161",
    "artist": "Haim Moche",
    "title": "Kol Nedarai",
    "href": "https://www.youtube.com/watch?v=6j-zy6Ef_pE",
    "note": 2
  },
  {
    "page": "54",
    "artist": "Arik Einstein",
    "title": "La ballade de Moché Salomon",
    "href": "https://www.youtube.com/watch?v=VBaahU8YmyA",
    "note": 1
  },
  {
    "page": "99",
    "artist": "BoazSharabi-ShoshanaDamari",
    "title": "LaChir Itakh",
    "href": "https://www.youtube.com/watch?v=6kLEk3_Swhc",
    "note": 4
  },
  {
    "page": "91",
    "artist": "Shalom Hanoch",
    "title": "Laila",
    "href": "https://www.youtube.com/watch?v=cG_chE9vWnE",
    "note": 1
  },
  {
    "page": "107",
    "artist": "Yehudit Ravitz",
    "title": "Lakahta et Yadi",
    "href": "https://www.youtube.com/watch?v=VV2rGPHvB8g",
    "note": 1
  },
  {
    "page": "108",
    "artist": "Shlomi Shabat",
    "title": "leKol Ehad",
    "href": "https://www.youtube.com/watch?v=Tw5ZFs18sAY",
    "note": 4
  },
  {
    "page": "45",
    "artist": "Efrat Gosh",
    "title": "Lireot het hahor",
    "href": "https://www.youtube.com/watch?v=7UAnc7lqJjM",
    "note": 1
  },
  {
    "page": "139",
    "artist": "TzviKa Pik",
    "title": "Lo Ani houh aHich",
    "href": "https://www.youtube.com/watch?v=ONM1Iia0R2Y",
    "note": 0
  },
  {
    "page": "51",
    "artist": "Haguachach hakhiver",
    "title": "Lou yéhi",
    "href": "https://www.youtube.com/watch?v=KaovY--ET14",
    "note": 1
  },
  {
    "page": "25",
    "artist": "Roni Dalumi",
    "title": "Ma Avarekh",
    "href": "https://www.youtube.com/watch?v=ujTPDIadFa0",
    "note": 1
  },
  {
    "page": "176",
    "artist": "Avi Toledano",
    "title": "Ma Hachouv Hayom",
    "href": "https://www.youtube.com/watch?v=5Sq1mCWEJlE",
    "note": 4
  },
  {
    "page": "103",
    "artist": "Idan Raichel",
    "title": "Maagalim",
    "href": "https://www.youtube.com/watch?v=5gemebkLaYY",
    "note": 2
  },
  {
    "page": "32",
    "artist": "Mordechai Ben David",
    "title": "Machiah",
    "href": "https://www.youtube.com/watch?v=CdYaNeU9iOo",
    "note": 3
  },
  {
    "page": "98",
    "artist": "Yehoram Gaon",
    "title": "Magach haKessef",
    "href": "https://www.youtube.com/watch?v=9hmqoCqtxWw",
    "note": 0
  },
  {
    "page": "169",
    "artist": "Omer Adam",
    "title": "Mahapecha shel Simha",
    "href": "https://www.youtube.com/watch?v=GlV0h4JPid0",
    "note": 2
  },
  {
    "page": "56",
    "artist": "LahaKat Hanahal",
    "title": "Mahar",
    "href": "https://www.youtube.com/watch?v=FVFwCL_pvGY",
    "note": 1
  },
  {
    "page": "198",
    "artist": "Ethnix",
    "title": "Mahar ani babait",
    "href": "https://www.youtube.com/watch?v=daCHl6fcrMI",
    "note": 1
  },
  {
    "page": "112",
    "artist": "TzviKa Pik",
    "title": "Mary Lou",
    "href": "https://www.youtube.com/watch?v=bbsMP75sPws",
    "note": 2
  },
  {
    "page": "69",
    "artist": "Rami Kleinstein",
    "title": "Matanot Ktanot",
    "href": "https://www.youtube.com/watch?v=pn_p5_8taxg",
    "note": 1
  },
  {
    "page": "102",
    "artist": "Yehoram Gaon",
    "title": "MeAl Pizgat Har Hatzofim",
    "href": "https://www.youtube.com/watch?v=f2HUGPujiWM",
    "note": 1
  },
  {
    "page": "215",
    "artist": "Idan Raichel",
    "title": "Mekhaké",
    "href": "https://www.youtube.com/watch?v=gJj1Xtdt8ZQ",
    "note": 2
  },
  {
    "page": "92",
    "artist": "Shalom Hanoch",
    "title": "Mekhakim le Machiah",
    "href": "https://www.youtube.com/watch?v=-0i3mev5EvQ",
    "note": 2
  },
  {
    "page": "75",
    "artist": "Sarit Hadad",
    "title": "Mekoudechet",
    "href": "https://www.youtube.com/watch?v=1antd5qhThM",
    "note": 4
  },
  {
    "page": "41",
    "artist": "Sarit Hadad",
    "title": "Merotz haHaim",
    "href": "https://www.youtube.com/watch?v=LdjfN1Llw0c&list=RDLdjfN1Llw0c",
    "note": 4
  },
  {
    "page": "64",
    "artist": "Eyal Golan",
    "title": "Mi cheMa'amin",
    "href": "https://www.youtube.com/watch?v=fsjVJKgjRuw",
    "note": 4
  },
  {
    "page": "53",
    "artist": "Ofra Haza",
    "title": "Michehou olekh tamid iti",
    "href": "https://www.youtube.com/watch?v=2pN1v_iGJN4",
    "note": 4
  },
  {
    "page": "203",
    "artist": "Hava Alberstein",
    "title": "Michiré Eretz Hahavati",
    "href": "https://www.youtube.com/watch?v=NOChT0LiOOs",
    "note": 0
  },
  {
    "page": "113",
    "artist": "Idan Raichel",
    "title": "Milim Yaffot meEleh",
    "href": "https://www.youtube.com/watch?v=j_oajsiBiQA",
    "note": 2
  },
  {
    "page": "125",
    "artist": "Amit Farkash",
    "title": "Million Khohavim",
    "href": "https://www.youtube.com/watch?v=kKettLssm8g",
    "note": 2
  },
  {
    "page": "205",
    "artist": "Idan Raichel",
    "title": "miMaAmakim",
    "href": "https://www.youtube.com/watch?v=kmW2yAYhMmM",
    "note": 2
  },
  {
    "page": "164",
    "artist": "Omer Adam",
    "title": "Modé Ani",
    "href": "https://www.youtube.com/watch?v=YQ5f1OMFFL0",
    "note": 3
  },
  {
    "page": "173",
    "artist": "Static",
    "title": "Namasté",
    "href": "https://www.youtube.com/watch?v=G_e707496Fg",
    "note": 2
  },
  {
    "page": "115",
    "artist": "Haim Moche",
    "title": "Nichba",
    "href": "https://www.youtube.com/watch?v=X1huVu3GcAg",
    "note": 1
  },
  {
    "page": "62",
    "artist": "Shlomo Artzi",
    "title": "Nivreti lakh",
    "href": "https://www.youtube.com/watch?v=QD8pkh2tVd4",
    "note": 2
  },
  {
    "page": "163",
    "artist": "Omer Adam",
    "title": "Noetzet Mabat",
    "href": "https://www.youtube.com/watch?v=iJ7w8bSn-EE",
    "note": 2
  },
  {
    "page": "186",
    "artist": "Uzi Hitman",
    "title": "Noladeti LaChalom",
    "href": "https://www.youtube.com/watch?v=3ivSCrzPYd4",
    "note": 1
  },
  {
    "page": "149",
    "artist": "Meital Trabelsi",
    "title": "Ô Rav Chovel",
    "href": "https://www.youtube.com/watch?v=3q3BL7H6a_g",
    "note": 0
  },
  {
    "page": "24",
    "artist": "Abraham Tal",
    "title": "Orot",
    "href": "https://www.youtube.com/watch?v=lROvvJlr0cc",
    "note": 2
  },
  {
    "page": "223",
    "artist": "Arik Einstein",
    "title": "Ouf Guozal",
    "href": "https://www.youtube.com/watch?v=IorR9rqaoN0",
    "note": 1
  },
  {
    "page": "59",
    "artist": "Arik Einstein",
    "title": "Perah Halilah",
    "href": "https://www.youtube.com/watch?v=fnOvFX_F00w",
    "note": 1
  },
  {
    "page": "66",
    "artist": "Hanan Yovel",
    "title": "Pguicha, Hatzi Pguicha",
    "href": "https://www.youtube.com/watch?v=UNB2AnUXL1o",
    "note": 0
  },
  {
    "page": "129",
    "artist": "LahaKat Hatothanim",
    "title": "Prachim BaKaneh",
    "href": "https://www.youtube.com/watch?v=EwvAywMw93M",
    "note": 1
  },
  {
    "page": "208",
    "artist": "Tislam",
    "title": "Radio Hazak",
    "href": "https://www.youtube.com/watch?v=-PY5m1qxYcw",
    "note": 1
  },
  {
    "page": "21",
    "artist": "Lahakat Hel aYam",
    "title": "Rak be Israel",
    "href": "https://www.youtube.com/watch?v=H19LanB-eEg",
    "note": 1
  },
  {
    "page": "123",
    "artist": "Roni Dalumi",
    "title": "Rikma Enochit",
    "href": "https://www.youtube.com/watch?v=XLGX-Op9vj0",
    "note": 1
  },
  {
    "page": "100",
    "artist": "Samir Choukri",
    "title": "Rona",
    "href": "https://www.youtube.com/watch?v=KQ2HuZjz0-Q",
    "note": 4
  },
  {
    "page": "79",
    "artist": "Arik Einstein",
    "title": "Rouah Stav",
    "href": "https://www.youtube.com/watch?v=TtEXyJTp95E",
    "note": 1
  },
  {
    "page": "196",
    "artist": "Arik Einstein",
    "title": "Ruti",
    "href": "https://www.youtube.com/watch?v=SnG0lB7KAq8",
    "note": 1
  },
  {
    "page": "220",
    "artist": "Arik Einstein",
    "title": "San Francisco",
    "href": "https://www.youtube.com/watch?v=fbflT6G9DMs",
    "note": 1
  },
  {
    "page": "160",
    "artist": "Avihou Medina",
    "title": "Shabechi Yerushalaim",
    "href": "https://www.youtube.com/watch?v=zpLJWjlZt9Y",
    "note": 3
  },
  {
    "page": "80",
    "artist": "Sarit Hadad",
    "title": "Shma Israel, le coeur pleure",
    "href": "https://www.youtube.com/watch?v=_qkwIouru7Y",
    "note": 4
  },
  {
    "page": "185",
    "artist": "David Broza",
    "title": "Sigualiot",
    "href": "https://www.youtube.com/watch?v=mHndiWsfc2U",
    "note": 1
  },
  {
    "page": "35",
    "artist": "Yehudit Ravitz",
    "title": "Slihot",
    "href": "https://www.youtube.com/watch?v=k8GZxZOYQK8",
    "note": 0
  },
  {
    "page": "207",
    "artist": "Tamouz",
    "title": "Sof onat haTapouzim",
    "href": "https://www.youtube.com/watch?v=_X_MAbcGMrk",
    "note": 1
  },
  {
    "page": "58",
    "artist": "Shlomo Artzi",
    "title": "Taguidi",
    "href": "https://www.youtube.com/watch?v=Ry9ijNhIw-w",
    "note": 2
  },
  {
    "page": "33",
    "artist": "Matti Caspi",
    "title": "Techouva",
    "href": "https://www.youtube.com/watch?v=DMlVh6aMToc",
    "note": 1
  },
  {
    "page": "12",
    "artist": "Ofra Haza",
    "title": "Tefilah",
    "href": "https://www.youtube.com/watch?v=bnh5VZwnp0U",
    "note": 4
  },
  {
    "page": "148",
    "artist": "Doudou Aaron",
    "title": "Terminal Chaloch",
    "href": "https://www.youtube.com/watch?v=rANiul86eSU",
    "note": 2
  },
  {
    "page": "44",
    "artist": "Shlomo Artzi",
    "title": "Titharou lakhem",
    "href": "https://www.youtube.com/watch?v=Y0KxZz5k-RE",
    "note": 1
  },
  {
    "page": "151",
    "artist": "Hava Alberstein",
    "title": "Tvi et haTsemer",
    "href": "https://www.youtube.com/watch?v=IN4aOpbTZ70",
    "note": 1
  },
  {
    "page": "221",
    "artist": "Ytzhak Klepter",
    "title": "Tzlil meKhouvan",
    "href": "https://www.youtube.com/watch?v=5jt9puNoxAA",
    "note": 2
  },
  {
    "page": "96",
    "artist": "Harel Skaat",
    "title": "VeAt",
    "href": "https://www.youtube.com/watch?v=AcpgsbFvnbM",
    "note": 2
  },
  {
    "page": "141",
    "artist": "Ilanit",
    "title": "veChouv Itkhem",
    "href": "https://www.youtube.com/watch?v=R6nCBjKmCEU",
    "note": 2
  },
  {
    "page": "153",
    "artist": "Yonatan Razel",
    "title": "veHi cheAmdah",
    "href": "https://www.youtube.com/watch?v=KKV07h85lHY",
    "note": 3
  },
  {
    "page": "90",
    "artist": "Arik Einstein",
    "title": "VeOulai",
    "href": "https://www.youtube.com/watch?v=Vv-Nrl724Zg",
    "note": 0
  },
  {
    "page": "144",
    "artist": "Omer Adam",
    "title": "Ya Habibi Tel Aviv",
    "href": "https://www.youtube.com/watch?v=nMQw29nfzpg",
    "note": 2
  },
  {
    "page": "27",
    "artist": "Lahakat Hel Hinoukh",
    "title": "Yalde Horef 73",
    "href": "https://www.youtube.com/watch?v=gp9sO89a32I",
    "note": 1
  },
  {
    "page": "110",
    "artist": "Hava Alberstein",
    "title": "Yamei Binyamina",
    "href": "https://www.youtube.com/watch?v=FWCogy07MQw",
    "note": 1
  },
  {
    "page": "191",
    "artist": "Eyal Golan",
    "title": "Yamim Yaguidou",
    "href": "https://www.youtube.com/watch?v=maTcKfZ4eqo",
    "note": 4
  },
  {
    "page": "180",
    "artist": "Arik Einstein",
    "title": "Yatsanou Ath",
    "href": "https://www.youtube.com/watch?v=klW2KWkq8ls",
    "note": 1
  },
  {
    "page": "147",
    "artist": "Ygal Bashan",
    "title": "Yech Li Tzipor Ktana baLev",
    "href": "https://www.youtube.com/watch?v=2drYXmnDsJk",
    "note": 1
  },
  {
    "page": "222",
    "artist": "Yehoram Gaon",
    "title": "Yech Makom",
    "href": "https://www.youtube.com/watch?v=wQoOJls_XX0",
    "note": 1
  },
  {
    "page": "216",
    "artist": "Arik Einstein",
    "title": "Yeladim chel haHaim",
    "href": "https://www.youtube.com/watch?v=zLkV3PHyxSM",
    "note": 2
  },
  {
    "page": "137",
    "artist": "Mooki",
    "title": "Yeled chel Aba",
    "href": "https://www.youtube.com/watch?v=Dv63nyew7qQ",
    "note": 2
  },
  {
    "page": "213",
    "artist": "Izhar Cohen",
    "title": "Yerushalaim Akheret",
    "href": "https://www.youtube.com/watch?v=fiOBVLcOzL4",
    "note": 2
  },
  {
    "page": "47",
    "artist": "Shouli Nathan",
    "title": "Yerushalaim shel zahav",
    "href": "https://www.youtube.com/watch?v=O2RoCNeM9B0",
    "note": 1
  },
  {
    "page": "81",
    "artist": "David Broza",
    "title": "Yiyeh Tov",
    "href": "https://www.youtube.com/watch?v=t5m31BjDkb8",
    "note": 1
  },
  {
    "page": "211",
    "artist": "Danny Sanderson",
    "title": "Zeh Hakol Bichvilekh",
    "href": "https://www.youtube.com/watch?v=6WqvYZiEDrM",
    "note": 1
  },
  {
    "page": "212",
    "artist": "Arik Lavie",
    "title": "Zeh Koreh",
    "href": "https://www.youtube.com/watch?v=bSF90A2qBdU",
    "note": 2
  },
  {
    "page": "90",
    "artist": "Yael Deckelbaum",
    "title": "Ahava Ahat",
    "href": "https://www.youtube.com/watch?v=r0A8x0_ck7Q",
    "note": 2
  }
];
