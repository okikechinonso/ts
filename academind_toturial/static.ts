const banks = [
  { bank_name: "bank_name", wema: "wema", alerzoId: "alerzo" },
  { bank_name: "ZINTERNET NIGERA LIMITED", wema: "100025", alerzoId: "110310" },
  { bank_name: "ZENITH MOBILE", wema: "100018", alerzoId: "110309" },
  { bank_name: "ZENITH EAZY WALLET", wema: "100034", alerzoId: "110308" },
  { bank_name: "ZENITH BANK", wema: "000015", alerzoId: "110307" },
  { bank_name: "YOBE MICROFINANCE BANK", wema: "090252", alerzoId: "110306" },
  { bank_name: "YES MICROFINANCE BANK", wema: "090142", alerzoId: "110305" },
  { bank_name: "YCT Microfinance Bank", wema: "090466", alerzoId: "110304" },
  { bank_name: "Xslnce Microfinance Bank", wema: "090124", alerzoId: "110303" },
  {
    bank_name: "Winview Microfinance Bank",
    wema: "090419",
    alerzoId: "110302",
  },
  {
    bank_name: "Wetland Microfinance Bank",
    wema: "090120",
    alerzoId: "110301",
  },
  { bank_name: "WEMA BANK", wema: "000017", alerzoId: "110300" },
  { bank_name: "VTNETWORK", wema: "100012", alerzoId: "110299" },
  { bank_name: "VISUAL ICT", wema: "100023", alerzoId: "110298" },
  { bank_name: "Visa Microfinance Bank", wema: "090139", alerzoId: "110297" },
  { bank_name: "VFD MFB", wema: "090110", alerzoId: "110296" },
  { bank_name: "VERITE MICROFINANCE BANK", wema: "090123", alerzoId: "110295" },
  {
    bank_name: "VERDANT MICROFINANCE BANK",
    wema: "090474",
    alerzoId: "110294",
  },
  { bank_name: "UNIUYO Microfinance Bank", wema: "090338", alerzoId: "110293" },
  { bank_name: "UNITY BANK", wema: "000011", alerzoId: "110292" },
  { bank_name: "UNITED BANK FOR AFRICA", wema: "000004", alerzoId: "110291" },
  { bank_name: "UNION BANK", wema: "000018", alerzoId: "110290" },
  { bank_name: "UNILAG MICROFINANCE BANK", wema: "090452", alerzoId: "110289" },
  {
    bank_name: "UNIILORIN MICROFINANCE BANK",
    wema: "090341",
    alerzoId: "110288",
  },
  {
    bank_name: "UNIBADAN MICROFINANCE BANK",
    wema: "090461",
    alerzoId: "110287",
  },
  { bank_name: "UNAAB MICROFINANCE BANK", wema: "090331", alerzoId: "110286" },
  { bank_name: "U & C MICROFINANCE BANK", wema: "090315", alerzoId: "110285" },
  { bank_name: "TRUST MICROFINANCE BANK", wema: "090327", alerzoId: "110284" },
  {
    bank_name: "Trident Microfinance Bank",
    wema: "090146",
    alerzoId: "110283",
  },
  { bank_name: "Titan Trust Bank Ltd", wema: "000025", alerzoId: "110282" },
  {
    bank_name: "THINK FINANCE MICROFINANCE BANK",
    wema: "090373",
    alerzoId: "110281",
  },
  { bank_name: "TEASY MOBILE", wema: "100010", alerzoId: "110280" },
  { bank_name: "TCF MFB", wema: "090115", alerzoId: "110279" },
  { bank_name: "TANGERINE MONEY", wema: "090426", alerzoId: "110278" },
  { bank_name: "TAJ BANK", wema: "000026", alerzoId: "110277" },
  {
    bank_name: "SUPPORT MICROFINANCE BANK",
    wema: "090446",
    alerzoId: "110276",
  },
  {
    bank_name: "SUNTRUST BANK NIGERIA LIMITED",
    wema: "000022",
    alerzoId: "110275",
  },
  { bank_name: "SUNBEAM MFB", wema: "090302", alerzoId: "110274" },
  {
    bank_name: "SULSPAP MICROFINANCE BANK",
    wema: "090305",
    alerzoId: "110273",
  },
  {
    bank_name: "STOCKCORP MICROFINANCE BANK",
    wema: "090340",
    alerzoId: "110272",
  },
  { bank_name: "STERLING BANK", wema: "000001", alerzoId: "110271" },
  { bank_name: "STB MORTGAGE BANK", wema: "070022", alerzoId: "110270" },
  {
    bank_name: "Standard Microfinance Bank",
    wema: "090182",
    alerzoId: "110269",
  },
  {
    bank_name: "STANDARD CHARTERED BANK NIGERIA LTD",
    wema: "000021",
    alerzoId: "110268",
  },
  {
    bank_name: "STANBIC IBTC @ EASE WALLET",
    wema: "100007",
    alerzoId: "110266",
  },
  { bank_name: "STANBIC IBTC BANK", wema: "000012", alerzoId: "110267" },
  {
    bank_name: "SPECTRUM MICROFINANCE BANK",
    wema: "090436",
    alerzoId: "110265",
  },
  { bank_name: "SPARKLE", wema: "090325", alerzoId: "110264" },
  { bank_name: "SLS MICROFINANCE BANK", wema: "090449", alerzoId: "110263" },
  {
    bank_name: "SEEDVEST MICROFINANCE BANK",
    wema: "090369",
    alerzoId: "110262",
  },
  {
    bank_name: "SEED CAPITAL MICROFINANCE BANK",
    wema: "090112",
    alerzoId: "110261",
  },
  { bank_name: "SAGAMU MICROFINANCE BANK", wema: "090140", alerzoId: "110260" },
  {
    bank_name: "SAFETRUST MORTGAGE BANK LIMITED",
    wema: "090006",
    alerzoId: "110259",
  },
  {
    bank_name: "SAFEGATE MICROFINANCE BANK",
    wema: "090485",
    alerzoId: "110258",
  },
  { bank_name: "RUBIES MICROFINANCE BANK", wema: "090175", alerzoId: "110257" },
  {
    bank_name: "Royal Exchange Microfinance Bank",
    wema: "090138",
    alerzoId: "110256",
  },
  { bank_name: "ROLEZ MICROFINANCE BANK", wema: "090405", alerzoId: "110255" },
  { bank_name: "RIGO MICROFINANCE BANK", wema: "090433", alerzoId: "110254" },
  {
    bank_name: "Richway Microfinance Bank",
    wema: "090132",
    alerzoId: "110253",
  },
  {
    bank_name: "REPHIDIM MICROFINANCE BANK",
    wema: "090322",
    alerzoId: "110252",
  },
  {
    bank_name: "RenMoney Microfinance Bank",
    wema: "090198",
    alerzoId: "110251",
  },
  {
    bank_name: "RELIANCE MICROFINANCE BANK",
    wema: "090173",
    alerzoId: "110250",
  },
  {
    bank_name: "REHOBOTH MICROFINANCE BANK",
    wema: "090463",
    alerzoId: "110249",
  },
  { bank_name: "Regent Microfinance Bank", wema: "090125", alerzoId: "110246" },
  { bank_name: "Regent Microfinance Bank", wema: "090125", alerzoId: "110248" },
  { bank_name: "REFUGE MORTGAGE BANK", wema: "070011", alerzoId: "110247" },
  { bank_name: "RAND MERCHANT BANK", wema: "000024", alerzoId: "110245" },
  {
    bank_name: "RAHAMA MICROFINANCE BANK ",
    wema: "090170",
    alerzoId: "110244",
  },
  {
    bank_name: "PURPLEMONEY MICROFINANCE BANK",
    wema: "090303",
    alerzoId: "110243",
  },
  { bank_name: "PROVIDUS BANK", wema: "000023", alerzoId: "110242" },
  {
    bank_name: "Preeminent Microfinance Bank",
    wema: "090412",
    alerzoId: "110241",
  },
  { bank_name: "POLARIS BANK LTD", wema: "000008", alerzoId: "110240" },
  { bank_name: "Platinum Mortgage Bank", wema: "070013", alerzoId: "110239" },
  { bank_name: "PERSONAL TRUST", wema: "090135", alerzoId: "110238" },
  { bank_name: "PENNYWISE MFB", wema: "090196", alerzoId: "110237" },
  {
    bank_name: "PECANTRUST MICROFINANCE BANK",
    wema: "090137",
    alerzoId: "110236",
  },
  { bank_name: "PEACE MICROFINANCE BANK", wema: "090402", alerzoId: "110235" },
  { bank_name: "PAYCOM(OPAY)", wema: "100004", alerzoId: "110234" },
  { bank_name: "PAYATTITUDE ONLINE", wema: "110001", alerzoId: "110233" },
  {
    bank_name: "PATRICKGOLD MICROFINANCE BANK",
    wema: "090317",
    alerzoId: "110232",
  },
  {
    bank_name: "PARKWAY MICROFINANCE BANK",
    wema: "090390",
    alerzoId: "110231",
  },
  { bank_name: "PARKWAY", wema: "100003", alerzoId: "110230" },
  { bank_name: "PARALLEX BANK", wema: "000030", alerzoId: "110229" },
  { bank_name: "PALMPAY", wema: "100033", alerzoId: "110228" },
  { bank_name: "PAGE FINANCIALS", wema: "070008", alerzoId: "110227" },
  { bank_name: "PAGA", wema: "100002", alerzoId: "110226" },
  { bank_name: "OSPOLY MICROFINANCE BANK", wema: "090456", alerzoId: "110225" },
  {
    bank_name: "OSCOTECH MICROFINANCE BANK",
    wema: "090396",
    alerzoId: "110224",
  },
  {
    bank_name: "ORITABASORUN MICROFINANCE BANK",
    wema: "090460",
    alerzoId: "110223",
  },
  { bank_name: "OOU MICROFINANCE BANK", wema: "090272", alerzoId: "110222" },
  { bank_name: "ONE FINANCE", wema: "100026", alerzoId: "110221" },
  { bank_name: "OMIYE MICROFINANCE BANK", wema: "090295", alerzoId: "110220" },
  {
    bank_name: "Oluchukwu Microfinance Bank",
    wema: "090471",
    alerzoId: "110219",
  },
  {
    bank_name: "OLOWOLAGBA MICROFINANCE BANK",
    wema: "090404",
    alerzoId: "110218",
  },
  {
    bank_name: "OLOFIN OWENA MICROFINANCE BANK ",
    wema: "090468",
    alerzoId: "110217",
  },
  { bank_name: "Ohafia Microfinance Bank", wema: "090119", alerzoId: "110216" },
  { bank_name: "OCHE MICROFINANCE BANK", wema: "090333", alerzoId: "110215" },
  { bank_name: "OAKLAND MICROFINACE BANK", wema: "090437", alerzoId: "110214" },
  {
    bank_name: "NWANNEGADI MICROFINANCE BANK",
    wema: "090399",
    alerzoId: "110213",
  },
  { bank_name: "NUTURE MICROFINANCE BANK", wema: "090364", alerzoId: "110212" },
  {
    bank_name: "NPF MICROFINANCE BANK PLC",
    wema: "070001",
    alerzoId: "110211",
  },
  {
    bank_name: "NOWNOW DIGITAL SYSTEMS LIMITED",
    wema: "100032",
    alerzoId: "110210",
  },
  { bank_name: "NOVA Merchant Bank", wema: "060003", alerzoId: "110209" },
  {
    bank_name: "NNEW WOMEN MICROFINANCE BANK",
    wema: "090283",
    alerzoId: "110208",
  },
  { bank_name: "NIRSAL MICROFINANCE BANK", wema: "090194", alerzoId: "110207" },
  {
    bank_name: "NIGERIAN NAVY MICROFINANCE BANK",
    wema: "090263",
    alerzoId: "110206",
  },
  { bank_name: "NICE MICROFINANCE BANK", wema: "090459", alerzoId: "110205" },
  { bank_name: "New Prudential Bank", wema: "090108", alerzoId: "110204" },
  {
    bank_name: "NEW GOLDEN PASTURES MICROFINANCE BANK",
    wema: "090378",
    alerzoId: "110203",
  },
  {
    bank_name: "NEW DAWN MICROFINANCE BANK",
    wema: "090205",
    alerzoId: "110202",
  },
  {
    bank_name: "NEPTUNE MICROFINANCE BANK",
    wema: "090329",
    alerzoId: "110201",
  },
  {
    bank_name: "NDIORAH MICROFINANCE BANK",
    wema: "090128",
    alerzoId: "110200",
  },
  {
    bank_name: "MUTUAL TRUST MICROFINANCE BANK",
    wema: "090151",
    alerzoId: "110199",
  },
  {
    bank_name: "MUTUAL BENEFITS MICROFINANCE BANK",
    wema: "090190",
    alerzoId: "110198",
  },
  {
    bank_name: "MOYOFADE MICROFINANCE BANK",
    wema: "090448",
    alerzoId: "110197",
  },
  {
    bank_name: "MONEY TRUST MICROFINANCE BANK ",
    wema: "090129",
    alerzoId: "110196",
  },
  { bank_name: "MONEY BOX", wema: "100020", alerzoId: "110195" },
  {
    bank_name: "MONARCH MICROFINANCE BANK",
    wema: "090462",
    alerzoId: "110194",
  },
  { bank_name: "MOLUSI MICROFINANCE BANK", wema: "090362", alerzoId: "110193" },
  { bank_name: "MINT-FINEX MFB", wema: "090281", alerzoId: "110192" },
  {
    bank_name: "MIMONEY (POWERED BY INTELLIFIN)",
    wema: "100027",
    alerzoId: "110191",
  },
  { bank_name: "MIMO (Mkudi)", wema: "100011", alerzoId: "110190" },
  {
    bank_name: "MICROVIS MICRO FINANCE BANK",
    wema: "090113",
    alerzoId: "110189",
  },
  {
    bank_name: "Microcred Microfinance Bank",
    wema: "090136",
    alerzoId: "110188",
  },
  {
    bank_name: "MEMPHIS MICROFINANCE BANK",
    wema: "090432",
    alerzoId: "110187",
  },
  {
    bank_name: "MEGAPRAISE MICROFINANCE BANK",
    wema: "090280",
    alerzoId: "110186",
  },
  {
    bank_name: "MAYFAIR MICROFINANCE BANK",
    wema: "090321",
    alerzoId: "110185",
  },
  {
    bank_name: "MAUTECH MICROFINANCE BANK",
    wema: "090423",
    alerzoId: "110184",
  },
  {
    bank_name: "MARITIME MICROFINANCE BANK",
    wema: "090410",
    alerzoId: "110183",
  },
  { bank_name: "MANNY MICROFINANCE BANK", wema: "090383", alerzoId: "110182" },
  {
    bank_name: "MALACHY MICROFINANCE BANK",
    wema: "090174",
    alerzoId: "110181",
  },
  { bank_name: "M36", wema: "100035", alerzoId: "110180" },
  { bank_name: "LOTUS BANK", wema: "000029", alerzoId: "110179" },
  {
    bank_name: "LIVINGTRUST MORTGAGE BANK PLC",
    wema: "070007",
    alerzoId: "110178",
  },
  { bank_name: "LINKS MICROFINANCE BANK", wema: "090435", alerzoId: "110177" },
  {
    bank_name: "Letshego Microfinance Bank",
    wema: "090420",
    alerzoId: "110176",
  },
  { bank_name: "LEGEND MICROFINANCE BANK", wema: "090372", alerzoId: "110175" },
  { bank_name: "LAVENDER MFB", wema: "090271", alerzoId: "110174" },
  { bank_name: "LAPO MFB", wema: "090177", alerzoId: "110173" },
  {
    bank_name: "LANDGOLD MICROFINANCE BANK",
    wema: "090422",
    alerzoId: "110172",
  },
  {
    bank_name: "LAGOS BUILDING INVESTMENT COMPANY",
    wema: "070012",
    alerzoId: "110171",
  },
  {
    bank_name: "LA FAYETTE MICROFINANCE BANK",
    wema: "090155",
    alerzoId: "110170",
  },
  { bank_name: "KWASU MICROFINANCE BANK", wema: "090450", alerzoId: "110169" },
  { bank_name: "KUDA MICROFINANCE BANK", wema: "090267", alerzoId: "110168" },
  {
    bank_name: "KONTAGORA MICROFINANCE BANK",
    wema: "090299",
    alerzoId: "110167",
  },
  { bank_name: "KEYSTONE BANK", wema: "000002", alerzoId: "110166" },
  {
    bank_name: "JUBILEE-LIFE MORTGAGE BANK",
    wema: "090003",
    alerzoId: "110165",
  },
  { bank_name: "JAIZ BANK", wema: "000006", alerzoId: "110164" },
  { bank_name: "Izon Microfinance Bank", wema: "090421", alerzoId: "110163" },
  { bank_name: "ISHIE MICROFINANCE BANK", wema: "090428", alerzoId: "110162" },
  {
    bank_name: "ISALEOYO MICROFINANCE BANK",
    wema: "090392",
    alerzoId: "110161",
  },
  { bank_name: "ISALEOYO MFB", wema: "090377", alerzoId: "110160" },
  { bank_name: "IRL Microfinance Bank", wema: "090149", alerzoId: "110159" },
  { bank_name: "INTERLAND MFB", wema: "090386", alerzoId: "110158" },
  {
    bank_name: "INSIGHT MICROFINANCE BANK",
    wema: "090434",
    alerzoId: "110157",
  },
  {
    bank_name: "Infinity Trust Mortgage Bank",
    wema: "070016",
    alerzoId: "110156",
  },
  {
    bank_name: "INFINITY MICROFINANCE BANK",
    wema: "090157",
    alerzoId: "110155",
  },
  {
    bank_name: "IMPERIAL HOMES MORTGAGE BANK ",
    wema: "100024",
    alerzoId: "110154",
  },
  { bank_name: "IMOWO MICROFINANCE BANK", wema: "090417", alerzoId: "110153" },
  { bank_name: "ILORIN MICROFINANCE BANK", wema: "090350", alerzoId: "110152" },
  { bank_name: "ILORA MICROFINANCE BANK", wema: "090430", alerzoId: "110151" },
  { bank_name: "ILISAN MICROFINANCE BANK", wema: "090370", alerzoId: "110150" },
  { bank_name: "IKIRE MICROFINANCE BANK", wema: "090279", alerzoId: "110149" },
  { bank_name: "IKENNE MICROFINANCE BANK", wema: "090324", alerzoId: "110148" },
  { bank_name: "IBILE MICROFINANCE BANK ", wema: "090118", alerzoId: "110147" },
  { bank_name: "IBETO MICROFINANCE BANK", wema: "090439", alerzoId: "110146" },
  {
    bank_name: "HOPE PAYMENT SERVICE BANK",
    wema: "120002",
    alerzoId: "110145",
  },
  {
    bank_name: "Highland Microfinance Bank",
    wema: "090418",
    alerzoId: "110144",
  },
  { bank_name: "HERITAGE BANK", wema: "000020", alerzoId: "110143" },
  { bank_name: "HEDONMARK MOBILE", wema: "100017", alerzoId: "110142" },
  {
    bank_name: "HEADWAY MICROFINANCE BANK",
    wema: "090363",
    alerzoId: "110141",
  },
  { bank_name: "HASAL MICROFINANCE BANK", wema: "090121", alerzoId: "110140" },
  { bank_name: "HAGGAI MORTGAGE BANK", wema: "070017", alerzoId: "110139" },
  {
    bank_name: "HACKMAN MICROFINANCE BANK",
    wema: "090147",
    alerzoId: "110138",
  },
  { bank_name: "GUARANTY TRUST BANK", wema: "000013", alerzoId: "110137" },
  { bank_name: "GTI MICROFINANCE BANK", wema: "090385", alerzoId: "110136" },
  { bank_name: "GTBank MOBILE MONEY", wema: "100009", alerzoId: "110135" },
  { bank_name: "GREENWICH MERCHANT BANK", wema: "060004", alerzoId: "110134" },
  {
    bank_name: "Greenville Microfinance Bank",
    wema: "090269",
    alerzoId: "110133",
  },
  { bank_name: "Gowans Microfinance Bank", wema: "090122", alerzoId: "110132" },
  { bank_name: "GOOD NEIGHBORS MFB", wema: "090467", alerzoId: "110131" },
  { bank_name: "GOMONEY", wema: "100022", alerzoId: "110130" },
  { bank_name: "GMB MICROFINANCE BANK", wema: "090408", alerzoId: "110129" },
  { bank_name: "GLOBUS BANK", wema: "000027", alerzoId: "110128" },
  { bank_name: "GIWA MICROFINANCE BANK", wema: "090441", alerzoId: "110127" },
  { bank_name: "GIREI MICROFINANCE BANK", wema: "090186", alerzoId: "110126" },
  {
    bank_name: "GIGINYA MICROFINANCE BANK",
    wema: "090411",
    alerzoId: "110125",
  },
  { bank_name: "GATEWAY MORTGAGE", wema: "070009", alerzoId: "110124" },
  { bank_name: "GAINT STRIDE MFB", wema: "090475", alerzoId: "110123" },
  { bank_name: "FUTO MICROFINANCE BANK", wema: "090158", alerzoId: "110122" },
  {
    bank_name: "FUTMINNA MICROFINANCE BANK",
    wema: "090438",
    alerzoId: "110121",
  },
  {
    bank_name: "Fullrange Microfinance Bank",
    wema: "090145",
    alerzoId: "110120",
  },
  { bank_name: "FSDH MERCHANT BANK LIMIT", wema: "400001", alerzoId: "110119" },
  { bank_name: "FORTIS MOBILE", wema: "100016", alerzoId: "110118" },
  { bank_name: "FORTIS MFB", wema: "070002", alerzoId: "110117" },
  {
    bank_name: "FIRST TRUST MORTGAGE BANK PLC",
    wema: "090005",
    alerzoId: "110114",
  },
  {
    bank_name: "FIRST TRUST MORTGAGE BANK PLC",
    wema: "090107",
    alerzoId: "110115",
  },
  { bank_name: "FIRSTMONIE", wema: "100014", alerzoId: "110116" },
  {
    bank_name: "First Generation Mortgage Bank",
    wema: "070014",
    alerzoId: "110113",
  },
  { bank_name: "FIRST BANK OF NIGERIA", wema: "000016", alerzoId: "110112" },
  { bank_name: "FIRMUS MICROFINANCE BANK", wema: "090366", alerzoId: "110111" },
  { bank_name: "FINCA MICROFINANCE BANK", wema: "090400", alerzoId: "110110" },
  {
    bank_name: "FINATRUST MICROFINANCE BANK",
    wema: "090111",
    alerzoId: "110109",
  },
  {
    bank_name: "Fidfund Microfinance Bank",
    wema: "090126",
    alerzoId: "110108",
  },
  { bank_name: "FIDELITY MOBILE", wema: "100019", alerzoId: "110107" },
  { bank_name: "FIDELITY BANK", wema: "000007", alerzoId: "110106" },
  { bank_name: "FFS MICROFINANCE BANK", wema: "090153", alerzoId: "110105" },
  { bank_name: "FET", wema: "100001", alerzoId: "110104" },
  {
    bank_name: "Federal University Dutse Microfinance Bank",
    wema: "090318",
    alerzoId: "110103",
  },
  {
    bank_name: "FEDERAL POLYTECHNIC NEKEDE MICROFINANCE BANK",
    wema: "090398",
    alerzoId: "110102",
  },
  { bank_name: "FCMB Easy Account", wema: "100031", alerzoId: "110101" },
  { bank_name: "FCMB", wema: "000003", alerzoId: "110100" },
  { bank_name: "FBNQuest Merchant Bank", wema: "060002", alerzoId: "110099" },
  { bank_name: "FAST MICROFINANCE BANK ", wema: "090179", alerzoId: "110098" },
  { bank_name: "FAME MICROFINANCE BANK", wema: "090330", alerzoId: "110097" },
  { bank_name: "EYOWO(USSD)", wema: "090328", alerzoId: "110096" },
  {
    bank_name: "EVERGREEN MICROFINANCE BANK",
    wema: "090332",
    alerzoId: "110095",
  },
  {
    bank_name: "EVANGEL MICROFINANCE BANK",
    wema: "090304",
    alerzoId: "110094",
  },
  { bank_name: "E-TRANZACT", wema: "100006", alerzoId: "110093" },
  { bank_name: "ESO-E MICROFINANCE BANK", wema: "090166", alerzoId: "110092" },
  { bank_name: "ESAN MICROFINANCE BANK", wema: "090189", alerzoId: "110091" },
  {
    bank_name: "EMPIRE TRUST MICROFINANCE BANK",
    wema: "090114",
    alerzoId: "110090",
  },
  { bank_name: "EK-RELIABLE MFB", wema: "090389", alerzoId: "110089" },
  { bank_name: "EKONDO MICROFINANCE BANK", wema: "090097", alerzoId: "110088" },
  { bank_name: "EDFIN MICROFINANCE BANK", wema: "090310", alerzoId: "110087" },
  { bank_name: "EcoMobile", wema: "100030", alerzoId: "110086" },
  { bank_name: "ECOBANK XPRESS ACCOUNT", wema: "100008", alerzoId: "110085" },
  { bank_name: "ECOBANK", wema: "000010", alerzoId: "110084" },
  { bank_name: "EBSU MICROFINANCE BANK", wema: "090427", alerzoId: "110083" },
  { bank_name: "EARTHOLEUM", wema: "100021", alerzoId: "110082" },
  {
    bank_name: "EAGLE FLIGHT MICROFINANCE BANK",
    wema: "090294",
    alerzoId: "110081",
  },
  {
    bank_name: "DAYLIGHT MICROFINANCE BANK",
    wema: "090167",
    alerzoId: "110080",
  },
  {
    bank_name: "DAVODANI MICROFINANCE BANK",
    wema: "090391",
    alerzoId: "110079",
  },
  {
    bank_name: "CRUTECH MICROFINANCE BANK",
    wema: "090414",
    alerzoId: "110078",
  },
  {
    bank_name: "CROSSRIVER MICROFINANCE BANK",
    wema: "090429",
    alerzoId: "110077",
  },
  {
    bank_name: "Credit Afrique Microfinance Bank",
    wema: "090159",
    alerzoId: "110076",
  },
  {
    bank_name: "COVENANT MICROFINANCE BANK",
    wema: "070006",
    alerzoId: "110075",
  },
  { bank_name: "CORONATION", wema: "060001", alerzoId: "110074" },
  {
    bank_name: "CORESTEP MICROFINANCE BANK",
    wema: "090365",
    alerzoId: "110073",
  },
  { bank_name: "Coop Mortgage Bank", wema: "070021", alerzoId: "110072" },
  {
    bank_name: "Consumer Microfinance Bank",
    wema: "090130",
    alerzoId: "110071",
  },
  { bank_name: "CONPRO MICROFINANCE BANK", wema: "090380", alerzoId: "110070" },
  {
    bank_name: "COASTLINE MICROFINANCE BANK",
    wema: "090374",
    alerzoId: "110069",
  },
  { bank_name: "CIT Microfinance Bank", wema: "090144", alerzoId: "110067" },
  { bank_name: "CITI BANK", wema: "000009", alerzoId: "110068" },
  { bank_name: "Chikum Microfinance Bank", wema: "090141", alerzoId: "110066" },
  { bank_name: "Chibueze MFB", wema: "090416", alerzoId: "110065" },
  {
    bank_name: "CHEERISH MICROFINANCE BANK",
    wema: "090440",
    alerzoId: "110064",
  },
  {
    bank_name: "CHANGHAN RTS MICROFINANCE BANK",
    wema: "090470",
    alerzoId: "110063",
  },
  {
    bank_name: "CHANELLE MICROFINANCE BANK",
    wema: "090397",
    alerzoId: "110062",
  },
  { bank_name: "CHAMS MOBILE", wema: "100015", alerzoId: "110061" },
  { bank_name: "CELLULANT", wema: "100005", alerzoId: "110060" },
  { bank_name: "CASHCONNECT MFB", wema: "090360", alerzoId: "110059" },
  {
    bank_name: "CAPSTONE MICROFINANCE BANK",
    wema: "090445",
    alerzoId: "110058",
  },
  {
    bank_name: "CALABAR MICROFINANCE BANK",
    wema: "090415",
    alerzoId: "110057",
  },
  {
    bank_name: "BUSINESS SUPPORT MICROFINANCE BANK",
    wema: "090406",
    alerzoId: "110056",
  },
  {
    bank_name: "BRIGHTWAY MICROFINANCE BANK",
    wema: "090308",
    alerzoId: "110055",
  },
  {
    bank_name: "BRIDGEWAY MICROFINANCE BANK",
    wema: "090393",
    alerzoId: "110054",
  },
  {
    bank_name: "BRETHREN MICROFINANCE BANK",
    wema: "090293",
    alerzoId: "110053",
  },
  { bank_name: "BRENT MORTGAGE BANK", wema: "070015", alerzoId: "110052" },
  { bank_name: "BOWEN MICROFINANCE BANK ", wema: "090148", alerzoId: "110051" },
  {
    bank_name: "BORSTAL MICROFINANCE BANK",
    wema: "090454",
    alerzoId: "110050",
  },
  { bank_name: "BORGU MICROFINANCE BANK", wema: "090395", alerzoId: "110049" },
  { bank_name: "BONGHE MICROFINANCE BANK", wema: "090319", alerzoId: "110048" },
  { bank_name: "BOI MICROFINANCE BANK", wema: "090444", alerzoId: "110047" },
  {
    bank_name: "Boctrust Microfinance Bank",
    wema: "090117",
    alerzoId: "110046",
  },
  {
    bank_name: "Bluewhales Microfinance Bank",
    wema: "090431",
    alerzoId: "110045",
  },
  { bank_name: "BIPC MICROFINANCE BANK", wema: "090336", alerzoId: "110044" },
  { bank_name: "BETA/ACCESS YELLO", wema: "100052", alerzoId: "110043" },
  {
    bank_name: "BENYSTA MICROFINANCE BANK",
    wema: "090413",
    alerzoId: "110042",
  },
  {
    bank_name: "BC KASH MICROFINANCE BANK",
    wema: "090127",
    alerzoId: "110041",
  },
  {
    bank_name: "BAYERO UNIVERSITY MICROFINANCE BANK",
    wema: "090316",
    alerzoId: "110040",
  },
  { bank_name: "BANEX MICROFINANCE BANK", wema: "090425", alerzoId: "110039" },
  { bank_name: "BALOGUN FULANI", wema: "090181", alerzoId: "110038" },
  {
    bank_name: "BAINES CREDIT MICROFINANCE BANK",
    wema: "090188",
    alerzoId: "110037",
  },
  { bank_name: "ATBU MICROFINANCE BANK", wema: "090451", alerzoId: "110036" },
  {
    bank_name: "ASTRAPOLARIS MICROFINANCE BANK",
    wema: "090172",
    alerzoId: "110035",
  },
  { bank_name: "Assets Microfinance Bank", wema: "090473", alerzoId: "110034" },
  {
    bank_name: "ASSET MATRIX MICROFINANCE BANK",
    wema: "090287",
    alerzoId: "110033",
  },
  { bank_name: "ASO SAVINGS", wema: "090001", alerzoId: "110032" },
  { bank_name: "APPLE MICROFINANCE BANK", wema: "090376", alerzoId: "110031" },
  { bank_name: "Apeks Microfinance Bank", wema: "090143", alerzoId: "110030" },
  {
    bank_name: "ANCHORAGE MICROFINANCE BANK",
    wema: "090476",
    alerzoId: "110029",
  },
  { bank_name: "AMML MFB", wema: "090116", alerzoId: "110028" },
  {
    bank_name: "AMJU UNIQUE MICROFINANCE BANK",
    wema: "090180",
    alerzoId: "110027",
  },
  {
    bank_name: "ALPHA KAPITAL MICROFINANCE BANK ",
    wema: "090169",
    alerzoId: "110026",
  },
  {
    bank_name: "Allworkers Microfinance Bank",
    wema: "090131",
    alerzoId: "110025",
  },
  {
    bank_name: "Alhayat Microfinance Bank",
    wema: "090277",
    alerzoId: "110024",
  },
  { bank_name: "ALERT MICROFINANCE BANK", wema: "090297", alerzoId: "110023" },
  {
    bank_name: "Al-Barakah Microfinance Bank",
    wema: "090133",
    alerzoId: "110022",
  },
  {
    bank_name: "AGOSASA MICROFINANCE BANK LTD",
    wema: "090371",
    alerzoId: "110021",
  },
  { bank_name: "AG Mortgage Bank", wema: "100028", alerzoId: "110020" },
  {
    bank_name: "ADDOSSER MICROFINANCE BANK",
    wema: "090160",
    alerzoId: "110019",
  },
  {
    bank_name: "ACCION MICROFINANCE BANK ",
    wema: "090134",
    alerzoId: "110018",
  },
  { bank_name: "ACCESSMONEY", wema: "100013", alerzoId: "110017" },
  { bank_name: "ACCESS BANK DIAMOND", wema: "000005", alerzoId: "110016" },
  { bank_name: "ACCESS BANK", wema: "000014", alerzoId: "110015" },
  {
    bank_name: "ABUCOOP MICROFINANCE BANK",
    wema: "090424",
    alerzoId: "110014",
  },
  { bank_name: "AB MICROFINANCE BANK", wema: "090270", alerzoId: "110012" },
  { bank_name: "ABBEY MORTGAGE BANK ", wema: "070010", alerzoId: "110013" },
  { bank_name: "9PAYMENT SERVICE BANK", wema: "120001", alerzoId: "110011" },
];
