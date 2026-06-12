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
            { name: "MekPark UNIT B", key: "unitb" },
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
        img: "uE7NPau.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Roboco",
        img: "eiykmJJ.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Sakura Miko",
        img: "KCvpDxG.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "Hoshimachi Suisei",
        img: "umBNABa.png",
        opts: {
            generation: ["gen0"],
        }
    },
    {
        name: "AZKi",
        img: "90rZtWt.png",
        opts: {
            generation: ["gen0"],
        }
    },
// Hololive Gen 1
    {
        name: "Akai Haato",
        img: "iQFpEms.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Yozora Mel",
        img: "B3e8sIi.png",
        opts: {
            generation: ["gen1"],
            former: true
        }
    },
    {
        name: "Natsuiro Matsuri",
        img: "1HPRJhc.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Aki Rosenthal",
        img: "cfn1EFb.png",
        opts: {
            generation: ["gen1"],
        }
    },
    {
        name: "Shirakami Fubuki",
        img: "HooWlY9.png",
        opts: {
            generation: ["gen1", "gamers"],
        }
    },
    {
        name: "Hanamiya Rica",
        img: "IZ65UCI.png",
        opts: {
            generation: ["gen1"],
			reincarnation: true
        }
    },
/*    {
        name: "Hitomi Chris",
        img: "",
        opts: {
            generation: ["gen1"],
            former: true,
        }
    },*/
// Hololive Gen 2
    {
        name: "Oozora Subaru",
        img: "SeV268p.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Yuzuki Choco",
        img: "OFLWBuI.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Murasaki Shion",
        img: "YdGKWTC.png",
        opts: {
            generation: ["gen2"],
            former:true
        }
    },
    {
        name: "Nakiri Ayame",
        img: "Y0Lo2oO.png",
        opts: {
            generation: ["gen2"],
        }
    },
    {
        name: "Minato Aqua",
        img: "9P2E0t9.png",
        opts: {
            generation: ["gen2"],
            former: true
        }
    },
    {
        name: "Yuuki Sakuna",
        img: "u4TvPUU.png",
        opts: {
            generation: ["gen2"],
			reincarnation: true
        }
    },
    {
        name: "Kurageu Roa",
        img: "Nlb20BW.png",
        opts: {
            generation: ["gen2"],
			reincarnation: true
        }
    },
// Hololive GAMERS
    {
        name: "Ookami Mio",
        img: "P2CwWEv.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Nekomata Okayu",
        img: "YQXePUK.png",
        opts: {
            generation: ["gamers"],
        }
    },
    {
        name: "Inugami Korone",
        img: "TEpx2pv.png",
        opts: {
            generation: ["gamers"],
        }
    },
// Hololive Gen 3
    {
        name: "Usada Pekora",
        img: "1DONuh0.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Uruha Rushia",
        img: "J7RoxwW.png",
        opts: {
            generation: ["gen3"],
            former: true
        }
    },
    {
        name: "Shiranui Flare",
        img: "YkrWj4R.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Shirogane Noel",
        img: "GoZxh6J.png",
        opts: {
            generation: ["gen3"],
        }
    },
    {
        name: "Houshou Marine",
        img: "e374nAk.png",
        opts: {
            generation: ["gen3"],
        }
    },
/*    {
        name: "Mikeneko",
        img: "ueA0nxN.png",
        opts: {
            generation: ["gen3"],
			reincarnation: true
        }
    },*/
// Hololive Gen 4
    {
        name: "Tsunomaki Watame",
        img: "08CJKig.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Tokoyami Towa",
        img: "bYZymLO.png",
        opts: {
            generation: ["gen4"],
        }
    },
    {
        name: "Kiryu Coco",
        img: "W0wGKnr.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Amane Kanata",
        img: "tPE8zOm.png",
        opts: {
            generation: ["gen4"],
            former: true
        }
    },
    {
        name: "Himemori Luna",
        img: "9kLZhNf.png",
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
        img: "IdjeSm9.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Momosuzu Nene",
        img: "asJZC5L.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Shishiro Botan",
        img: "Mzwlx9J.png",
        opts: {
            generation: ["gen5"],
        }
    },
    {
        name: "Omaru Polka",
        img: "aq8ennV.png",
        opts: {
            generation: ["gen5"],
        }
    },
/*    {
        name: "Mano Aloe",
        img: "",
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
        img: "9P5vgJw.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Takane Lui",
        img: "8FukPme.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Hakui Koyori",
        img: "KKK7g9x.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Sakamata Chloe",
        img: "MkwOWvT.png",
        opts: {
            generation: ["gen6"],
            former: true
        }
    },
    {
        name: "Kazama Iroha",
        img: "q8JGEns.png",
        opts: {
            generation: ["gen6"],
        }
    },
    {
        name: "Amagai Ruka",
        img: "U5KJRXu.png",
        opts: {
            generation: ["gen6"],
			reincarnation: true
        }
    },
// Hololive Dev_IS ReGloss
    {
        name: "Hiodoshi Ao",
        img: "YtAffds.png",
        opts: {
            generation: ["regloss"],
            former: true
        }
    },
    {
        name: "Otonose Kanade",
        img: "QBfeV2A.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Ichijou Ririka",
        img: "n6AAXEo.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Juufuutei Raden",
        img: "BTdMwrW.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
        name: "Todoroki Hajime",
        img: "4UgbKNC.png",
        opts: {
            generation: ["regloss"],
        }
    },
    {
/*        name: "Mizuchima Komori",
        img: "10fHCYj.png",
        opts: {
            generation: ["regloss"],
			reincarnation: true
        }
    },*/
// Hololive Dev_IS FLOW GLOW
    {
        name: "Isaki Riona",
        img: "LxMQKgP.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Koganei Niko",
        img: "9TMCzRg.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Mizumiya Su",
        img: "GQOuSpu.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Rindo Chihaya",
        img: "OmYeQSZ.png",
        opts: {
            generation: ["flowglow"],
        }
    },
    {
        name: "Kikirara Vivi",
        img: "l1vcBkd.png",
        opts: {
            generation: ["flowglow"],
        }
    },
// Hololive EN Myth
    {
        name: "Mori Calliope",
        img: "4zkQgji.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Takanashi Kiara",
        img: "NcDAgeV.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Ninomae Ina'nis",
        img: "VlwHFdU.png",
        opts: {
            generation: ["en"],
            notjphololive: true
        }
    },
    {
        name: "Gawr Gura",
        img: "TRtemdT.png",
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Watson Amelia",
        img: "Zqt8uJy.png",
        opts: {
            generation: ["en"],
            notjphololive: true,
            former: true
        }
    },
/*    {
        name: "Dooby",
        img: "",
        opts: {
            generation: ["en"],
			reincarnation: true
        }
    },*/
    {
        name: "Sameko Saba",
        img: "P802le9.png",
        opts: {
            generation: ["en"],
			reincarnation: true
        }
    },
// Hololive EN Promise
    {
        name: "IRyS",
        img: "ghKvVeB.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Tsukumo Sana",
        img: "fTJL7H0.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ceres Fauna",
        img: "Fly5TTD.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ouro Kronii",
        img: "9RdX60K.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Nanashi Mumei",
        img: "gocIYn9.png",
        opts: {
            generation: ["en2"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Hakos Baelz",
        img: "5TlL1TB.png",
        opts: {
            generation: ["en2"],
            notjphololive: true
        }
    },
    {
        name: "Nimi Nightmare",
        img: "T2Lx1DZ.png",
        opts: {
            generation: ["en2"],
			reincarnation: true
        }
    },
// Hololive EN Advent
    {
        name: "Shiori Novella",
        img: "opKABmu.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Koseki Bijou",
        img: "aWalE7u.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Nerissa Ravencroft",
        img: "2UhmCCJ.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Fuwawa Abyssgard",
        img: "8R6YIz7.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
    {
        name: "Mococo Abyssgard",
        img: "arMEIn4.png",
        opts: {
            generation: ["en3"],
            notjphololive: true
        }
    },
// Hololive EN Justice
    {
        name: "Elizabeth Rose Bloodflame",
        img: "yXWnR6O.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Gigi Murin",
        img: "xYJfYmI.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Cecilia Immergreen",
        img: "1FUD0ch.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
    {
        name: "Raora Panthera",
        img: "7FKHLst.png",
        opts: {
            generation: ["en4"],
            notjphololive: true
        }
    },
// Hololive Staff
    {
        name: "A-chan",
        img: "QFRbWAM.png",
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Harusaki Nodoka",
        img: "xmOPWVt.png",
        opts: {
            generation: ["staff"],
            former: true
        }
    },
    {
        name: "Hanazono Sayaka",
        img: "h9F6UyF.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Izuki Michiru",
        img: "YqfHGNl.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Kazeshiro Yuki",
        img: "anMPCkY.png",
        opts: {
            generation: ["staff"],
        }
    },
    {
        name: "Yubari Rei",
        img: "Kxv3H8S.png",
        opts: {
            generation: ["staff"],
			reincarnation: true
        }
    },
// MekPark UNIT B
    {
        name: "Yoinagi Neon",
        img: "Tn77Kki.png",
        opts: {
            generation: ["unitb"],
        }
    },
    {
        name: "Reimei Mira",
        img: "ZMx30hL.png",
        opts: {
            generation: ["unitb"],
        }
    },
    {
        name: "Kiyosumi Lyra",
        img: "5GxqzMD.png",
        opts: {
            generation: ["unitb"],
        }
    },
// MekPark ACHRORA
    {
        name: "Sayana",
        img: "hVrtszs.png",
        opts: {
            generation: ["achrora"],
        }
    },
    {
        name: "Rirara",
        img: "HtKaArV.png",
        opts: {
            generation: ["achrora"],
        }
    },
    {
        name: "Hinami",
        img: "EjMgSYc.png",
        opts: {
            generation: ["achrora"],
        }
    },
// Indies
    {
        name: "Watagashi Unou",
        img: "LIEGOVn.png",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Shigure Ui",
        img: "u1b58WE.png",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Amatsuka Uto",
        img: "vqRVtdn.png",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Yukinoshita Peo",
        img: "tKBTo6g.png",
        opts: {
            generation: ["indie"],
        }
    },
    {
        name: "Appare Hinata",
        img: "y7OTNcb.png",
        opts: {
            generation: ["indie"],
        }
    },
	
	
/*	,
    {
        name: "Yogiri",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Civia",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Spade Echo",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Doris",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Artia",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Rosalyn",
        img: "",
        opts: {
            generation: ["cn"],
            notjphololive: true,
            former: true
        }
    },
    {
        name: "Ayunda Risu",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Moona Hoshinova",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Airani Iofifteen",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kureiji Ollie",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Anya Melfissa",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Pavolia Reine",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Vesia Zeta",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kaela Kovalskia",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
    {
        name: "Kobo Kanaeru",
        img: "",
        opts: {
            generation: ["id"],
            notjphololive: true
        }
    },
	{
        name: "Hanasaki Miyabi",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kagami Kira",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Kanade Izuru",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Arurandeisu",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Rikka",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Astel Leda",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kishido Temma",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yukoku Roberu",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Kageyama Shien",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Aragami Oga",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
        }
    },
    {
        name: "Yakushiji Suzaku",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Tsukishita Kaoru",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true,
        }
    },
    {
        name: "Regis Altare",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Magni Dezmond",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Axel Syrios",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Noir Vesper",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Gavis Bettel",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Machina X Flayon",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Banzoin Hakka",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Josuiji Shinji",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Yatogami Fuma",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Utsugi Uyu",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    },
    {
        name: "Hizaki Gamma",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true,
            former: true
        }
    },
    {
        name: "Minase Rio",
        img: "",
        opts: {
            generation: ["stars"],
            notgirl: true
        }
    }*/
];
