const json = `
[{"id":1,"first_name":"Mohammed","last_name":"Vanyushin","email":"mvanyushin0@home.pl","gender":"Male","salary":1591},
{"id":2,"first_name":"Jillayne","last_name":"Joscelin","email":"jjoscelin1@moonfruit.com","gender":"Female","salary":1097},
{"id":3,"first_name":"Edyth","last_name":"Swainger","email":"eswainger2@chicagotribune.com","gender":"Female","salary":4631},
{"id":4,"first_name":"Vince","last_name":"De Mitris","email":"vdemitris3@dailymail.co.uk","gender":"Male","salary":1335},
{"id":5,"first_name":"Eloise","last_name":"Minett","email":"eminett4@ucoz.com","gender":"Female","salary":1244},
{"id":6,"first_name":"Laughton","last_name":"Tappor","email":"ltappor5@zdnet.com","gender":"Male","salary":1624},
{"id":7,"first_name":"Laural","last_name":"Zoanetti","email":"lzoanetti6@fda.gov","gender":"Female","salary":1580},
{"id":8,"first_name":"Selene","last_name":"Sigars","email":"ssigars7@woothemes.com","gender":"Non-binary","salary":1168},
{"id":9,"first_name":"Roma","last_name":"Fazan","email":"rfazan8@nbcnews.com","gender":"Genderqueer","salary":2099},
{"id":10,"first_name":"Helene","last_name":"Verrall","email":"hverrall9@google.nl","gender":"Genderfluid","salary":3680},
{"id":11,"first_name":"Emmy","last_name":"Revans","email":"erevansa@slideshare.net","gender":"Male","salary":4726},
{"id":12,"first_name":"Tobye","last_name":"Matevosian","email":"tmatevosianb@tinyurl.com","gender":"Female","salary":1197},
{"id":13,"first_name":"Kip","last_name":"Birchenough","email":"kbirchenoughc@ovh.net","gender":"Female","salary":3967},
{"id":14,"first_name":"Estevan","last_name":"Ferris","email":"eferrisd@senate.gov","gender":"Male","salary":4581},
{"id":15,"first_name":"Duff","last_name":"Mateja","email":"dmatejae@ebay.com","gender":"Male","salary":1030},
{"id":16,"first_name":"Swen","last_name":"Firman","email":"sfirmanf@webs.com","gender":"Male","salary":2300},
{"id":17,"first_name":"Scotty","last_name":"Colaton","email":"scolatong@de.vu","gender":"Male","salary":1136},
{"id":18,"first_name":"Verile","last_name":"Deplacido","email":"vdeplacidoh@wordpress.com","gender":"Female","salary":4803},
{"id":19,"first_name":"Jessy","last_name":"Hardwich","email":"jhardwichi@taobao.com","gender":"Female","salary":3398},
{"id":20,"first_name":"Marcile","last_name":"Raywood","email":"mraywoodj@aol.com","gender":"Female","salary":1830}]
`;

const members = JSON.parse(json); // json 데이터를 가져와서 자바스크립트의 객체로 변환
console.log(members);