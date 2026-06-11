dataSetVersion = "2026-06-11"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
    {
        name: "Filter by Generation",
        key: "generation",
        tooltip: "Check this to restrict to certain generations.",
        checked: false,
        sub: [
            { name: "Hololive 0th gen", key: "gen0" },
            { name: "Hololive 1st gen", key: "gen1" },
            { name: "Hololive 2nd gen", key: "gen2" },
            { name: "Hololive GAMERS", key: "gamers" },
            { name: "Hololive 3rd gen", key: "gen3" },
            { name: "Hololive 4th gen", key: "gen4" },
            { name: "Hololive 5th gen", key: "gen5" },
            { name: "Hololive HoloX", key: "gen6" },
            { name: "Hololive DEV_IS ReGLOSS", key: "regloss" },
            { name: "Hololive DEV_IS FLOW GLOW", key: "flowglow" },
            { name: "Hololive EN Myth", key: "en" },
            { name: "Hololive EN Promise", key: "en2" },
            { name: "Hololive EN Advent", key: "en3" },
            { name: "Hololive EN Justice", key: "en4" },
            { name: "Hololive Staff", key: "staff" },
            { name: "MekPark UNIT_B", key: "unitb" },
            { name: "MekPark ACHRORA", key: "achrora" },
            { name: "Indies", key: "indie" }/*,
            { name: "Hololive China", key: "cn" },
            { name: "Hololive Indonesia", key: "id" },
            { name: "Holostars", key: "stars" }*/
        ]
    },
/*    {
        name: "Remove Non-JP Holos",
        key: "notjphololive",
        tooltip: "Check this to remove all non-JP Hololive members. HyperPlease.",
        checked: false
    },
    {
        name: "Remove Non-Girls",
        key: "notgirl",
        tooltip: "Check this to remove all non-female members."
    },*/
    {
        name: "Remove Former Members",
        key: "former",
        tooltip: "Check this to remove all former members."
    },
    {
        name: "Include Reincarnations",
        key: "reincarnation",
        tooltip: "Check this to include former members' new channels."
    },
];

dataSet[dataSetVersion].characterData = [
// Hololive Gen 0
    {
        name: "Tokino Sora",
        img: "el6ieQx.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Roboco",
        img: "Nw2r4BG.jpg",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "Gb3uHb2.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Hoshimachi Suisei",
        img: "gAQCxaF.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "AZKi",
        img: "PX67EEc.png",
        opts: {
            generation: ["gen0"],
        }
    },
// Hololive Gen 1
    {
        name: "Akai Haato",
        img: "MUBdSy6.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Yozora Mel",
        img: "sqSBREB.png",
        opts: {
            generation: ["gen1"],
            former: true
        }
    },
    {
        name: "Natsuiro Matsuri",
        img: "qrdgclm.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "6raI9BB.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "Sek22uJ.png",
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Hanamiya Rica",
        img: "",
        opts: {
            generation: ["gen1"],
			reincarnation: true
        }
    },
/*    {
        name: "Hitomi Chris",
        img: "P2uzny8.png",
        opts: {
            generation: ["gen1"],
            former: true,
        }
    },*/
// Hololive Gen 2
    {
        name: "Oozora Subaru",
        img: "e0pzYCp.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "6taIs7y.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "2rUd9Hj.png",
        opts: {
            generation: ["gen2"],
            former:true
        }
    },
    {
        name: "Nakiri Ayame",
        img: "8ICfmE6.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "GEAHYcy.png",
        opts: {
            generation: ["gen2"],
            former: true
        }
    },
    {
        name: "Yuuki Sakuna",
        img: "",
        opts: {
            generation: ["gen2"],
			reincarnation: true
        }
    },
    {
        name: "Kurageu Roa",
        img: "",
        opts: {
            generation: ["gen2"],
			reincarnation: true
        }
    },
// Hololive GAMERS
    {
        name: "Ookami Mio",
        img: "xIiwgJB.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "sb6ISaI.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Inugami Korone",
        img: "M2UukBq.png",
        opts: {
            generation: ["gamers"],
        }
    },
// Hololive Gen 3
    {
        name: "Usada Pekora",
        img: "hvwVxHl.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "1iy3jFk.png",
        opts: {
            generation: ["gen3"],
            former: true
        }
    },
    {
        name: "Shiranui Flare",
        img: "Z4ZOaZU.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shirogane Noel",
        img: "xS02Vsq.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Houshou Marine",
        img: "zSn4YYH.png",
        opts: {
            generation: ["gen3"],
        }
    },
/*    {
        name: "Mikeneko",
        img: "",
        opts: {
            generation: ["gen3"],
			reincarnation: true
        }
    },*/
// Hololive Gen 4
    {
        name: "Tsunomaki Watame",
        img: "pOyZC1X.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "ig4gwEF.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Kiryu Coco",
        img: "fal9cIp.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Amane Kanata",
        img: "codYKLf.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Himemori Luna",
        img: "wdZUtEg.png",
        opts: {
            generation: ["gen4"],
        }
    },
/*    {
        name: "Kson",
        img: "",
        opts: {
            generation: ["gen4"],
			reincarnation: true
        }
    },*/
// Hololive Gen 5
    {
        name: "Yukihana Lamy",
        img: "arLeQSp.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Momosuzu Nene",
        img: "lyNlJW3.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Shishiro Botan",
        img: "f698oAj.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Omaru Polka",
        img: "HGxfwSH.png",
        opts: {
            generation: ["gen5"],
        }
    },
/*    {
        name: "Mano Aloe",
        img: "vcZEMzV.png",
        opts: {
            generation: ["gen5"],
            former: true
        }
    },
    {
        name: "DELUTAYA",
        img: "",
        opts: {
            generation: ["gen5"],
			reincarnation: true
        }
    },*/
// Hololive HoloX
    {
        name: "La+ Darkness",
        img: "4mXl55X.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Takane Lui",
        img: "sZj2hf5.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hakui Koyori",
        img: "shdcHcD.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Sakamata Chloe",
        img: "nlhnsjs.png",
        opts: {
            generation: ["gen6"],
            former: true
        }
    },
    {
        name: "Kazama Iroha",
        img: "eNcW0cS.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Amagai Ruka",
        img: "",
        opts: {
            generation: ["gen6"],
			reincarnation: true
        }
    },
// Hololive Dev_IS ReGloss
    {
        name: "Hiodoshi Ao",
        img: "KWAQaV1.png",
        opts: {
            generation: ["regloss"],
            former: true
        }
    },
    {
        name: "Otonose Kanade",
        img: "wVacDKp.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Ichijou Ririka",
        img: "EadnOh9.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Juufuutei Raden",
        img: "B57CxJ1.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Todoroki Hajime",
        img: "wO0BWC9.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Mizuchima Komori",
        img: "",
        opts: {
            generation: ["regloss"],
			reincarnation: true
        }
    },
// Hololive Dev_IS FLOW GLOW
    {
        name: "Isaki Riona",
        img: "DchAQtL.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Koganei Niko",
        img: "AhFZwYl.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Mizumiya Su",
        img: "OBPKp7p.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Rindo Chihaya",
        img: "OPJodPs.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Kikirara Vivi",
        img: "TyyXagO.png",
        opts: {
            generation: ["flowglow"],
        }
    },
// Hololive EN Myth
    {
        name: "Mori Calliope",
        img: "j8erQSM.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Takanashi Kiara",
        img: "8jD2gBo.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ninomae Ina'nis",
        img: "p9R7Iod.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Gawr Gura",
        img: "WtmZaXM.png",
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Watson Amelia",
        img: "1IBgtt8.png",
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Dooby",
        img: "",
        opts: {
            generation: ["en"],
			reincarnation: true
        }
    },
    {
        name: "Sameko Saba",
        img: "",
        opts: {
            generation: ["en"],
			reincarnation: true
        }
    },
// Hololive EN Promise
    {
        name: "IRyS",
        img: "txqogoD.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Tsukumo Sana",
        img: "g7Zrvv3.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ceres Fauna",
        img: "HMLilU0.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ouro Kronii",
        img: "aj5fCrx.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Nanashi Mumei",
        img: "EokVK8K.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Hakos Baelz",
        img: "87BaHiK.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Nimi Nightmare",
        img: "",
        opts: {
            generation: ["en2"],
			reincarnation: true
        }
    },
// Hololive EN Advent
    {
        name: "Shiori Novella",
        img: "NRuDhPV.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Koseki Bijou",
        img: "3IgAvZT.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Nerissa Ravencroft",
        img: "BQ74EHx.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Fuwawa Abyssgard",
        img: "2kdKmsb.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Mococo Abyssgard",
        img: "3HCwn04.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
// Hololive EN Justice
    {
        name: "Elizabeth Rose Bloodflame",
        img: "UVYE0RW.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Gigi Murin",
        img: "Ys02Ug2.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Cecilia Immergreen",
        img: "vi86MRS.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Raora Panthera",
        img: "3jKUZcG.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
// Hololive Staff
    {
        name: "A-chan",
        img: "Bb3Cyqk.png",
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Harusaki Nodoka",
        img: "aYMMeIk.png",
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Hanazono Sayaka",
        img: "ab2fv7L.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Izuki Michiru",
        img: "NBIyfh5.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Kazeshiro Yuki",
        img: "tKKx2kZ.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Yubari Rei",
        img: "",
        opts: {
            generation: ["staff"],
			reincarnation: true
        }
    },
// MekPark UNIT_B
    {
        name: "Yoinagi Neon",
        img: "",
        opts: {
            generation: ["unitb"],
        }
    },
    {
        name: "Reimei Mira",
        img: "",
        opts: {
            generation: ["unitb"],
        }
    },
    {
        name: "Kiyosumi Lyra",
        img: "",
        opts: {
            generation: ["unitb"],
        }
    },
// MekPark ACHRORA
    {
        name: "Sayana",
        img: "",
        opts: {
            generation: ["achrora"],
        }
    },
    {
        name: "Rirara",
        img: "",
        opts: {
            generation: ["achrora"],
        }
    },
    {
        name: "Hinami",
        img: "",
        opts: {
            generation: ["achrora"],
        }
    },
// Indies
    {
        name: "Watagashi Unou",
        img: "",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Shigure Ui",
        img: "",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Amatsuka Uto",
        img: "",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Yukinoshita Peo",
        img: "",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Appare Hinata",
        img: "",
        opts: {
            generation: ["indie"],
        }
    },
	
	
/*	,
    {
        name: "Yogiri",
        img: "8uyCIbp.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Civia",
        img: "TQwYoKA.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Spade Echo",
        img: "HbebtrC.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Doris",
        img: "ZXjHi8f.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Artia",
        img: "PILecug.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Rosalyn",
        img: "dpMTyGF.png",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ayunda Risu",
        img: "BhRbyEU.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Moona Hoshinova",
        img: "u9NwKye.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Airani Iofifteen",
        img: "hGAkQXZ.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kureiji Ollie",
        img: "vHDoixD.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Anya Melfissa",
        img: "6ZrfPUo.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "DnVmYDq.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Vesia Zeta",
        img: "maPX2c5.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kaela Kovalskia",
        img: "pS0KjQu.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kobo Kanaeru",
        img: "im0GFjU.png",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
	{
        name: "Hanasaki Miyabi",
        img: "JmjAl51.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kagami Kira",
        img: "6JI1hQz.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Kanade Izuru",
        img: "as6Tj8A.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Arurandeisu",
        img: "tCrsBrq.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Rikka",
        img: "31J4UYx.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Astel Leda",
        img: "LBBvcPs.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kishido Temma",
        img: "Dw68kL3.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yukoku Roberu",
        img: "Zwtz59X.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kageyama Shien",
        img: "LHG6bKg.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Aragami Oga",
        img: "CgiQ2yR.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yakushiji Suzaku",
        img: "QSlHaie.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Tsukishita Kaoru",
        img: "MiCGUjf.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Regis Altare",
        img: "xflzqjP.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Magni Dezmond",
        img: "wba3Wt4.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Axel Syrios",
        img: "ggyrdAK.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Noir Vesper",
        img: "4FIHS3P.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Gavis Bettel",
        img: "Ku4gLGn.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Machina X Flayon",
        img: "FvPXLdD.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Banzoin Hakka",
        img: "8sx3JFt.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Josuiji Shinji",
        img: "yFKvefo.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Yatogami Fuma",
        img: "RzrVASI.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Utsugi Uyu",
        img: "ulXcEyq.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Hizaki Gamma",
        img: "xnY9AYc.png",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Minase Rio",
        img: "HE5T2qt.png",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    }*/
];
