// ===== UTTAR PRADESH — ALL DISTRICTS, TEHSILS, BLOCKS & AMETHI GPs =====

var UP_DISTRICTS = [
  'Agra','Aligarh','Ambedkar Nagar','Amethi','Amroha','Auraiya','Ayodhya',
  'Azamgarh','Baghpat','Bahraich','Ballia','Balrampur','Banda','Barabanki',
  'Bareilly','Basti','Bhadohi','Bijnor','Budaun','Bulandshahr','Chandauli',
  'Chitrakoot','Deoria','Etah','Etawah','Farrukhabad','Fatehpur','Firozabad',
  'Gautam Buddha Nagar','Ghaziabad','Ghazipur','Gonda','Gorakhpur','Hamirpur',
  'Hapur','Hardoi','Hathras','Jalaun','Jaunpur','Jhansi','Kannauj',
  'Kanpur Dehat','Kanpur Nagar','Kasganj','Kaushambi','Kheri','Kushinagar',
  'Lalitpur','Lucknow','Maharajganj','Mahoba','Mainpuri','Mathura','Mau',
  'Meerut','Mirzapur','Moradabad','Muzaffarnagar','Pilibhit','Pratapgarh',
  'Prayagraj','Rae Bareli','Rampur','Saharanpur','Sambhal','Sant Kabir Nagar',
  'Shahjahanpur','Shamli','Shravasti','Siddharthnagar','Sitapur','Sonbhadra',
  'Sultanpur','Unnao','Varanasi'
];

// ===== TEHSILS FOR ALL 75 UP DISTRICTS =====
var UP_TEHSILS = {
  'Agra': ['Agra','Etmadpur','Fatehabad','Kheragarh','Bah','Kiraoli'],
  'Aligarh': ['Aligarh','Atrauli','Gabhana','Iglas','Khair','Koil'],
  'Ambedkar Nagar': ['Akbarpur','Alapur','Jalalpur','Tanda'],
  'Amethi': ['Amethi','Gauriganj','Musafirkhana','Tiloi'],
  'Amroha': ['Amroha','Dhanaura','Hasanpur','Naugawan Sadat'],
  'Auraiya': ['Auraiya','Bidhuna','Sahar'],
  'Ayodhya': ['Ayodhya','Bikapur','Milkipur','Rudauli','Sohawal'],
  'Azamgarh': ['Azamgarh','Burhanpur','Lalganj','Mehnagar','Mohammadpur','Sagri'],
  'Baghpat': ['Baghpat','Baraut','Khekra'],
  'Bahraich': ['Bahraich','Kaiserganj','Nanpara','Payagpur','Mahasi'],
  'Ballia': ['Ballia','Bansdih','Bairia','Rasra','Sikandarpur'],
  'Balrampur': ['Balrampur','Gaindas Bujurg','Tulsipur','Utraula'],
  'Banda': ['Banda','Baberu','Naraini','Atarra','Kamasin'],
  'Barabanki': ['Barabanki','Fatehpur','Haidergarh','Nawabganj','Ram Sanehi Ghat','Sirauli Gauspur'],
  'Bareilly': ['Bareilly','Aonla','Baheri','Faridpur','Meerganj','Nawabganj'],
  'Basti': ['Basti','Harraiya','Khalilabad'],
  'Bhadohi': ['Bhadohi','Aurai','Gyanpur'],
  'Bijnor': ['Bijnor','Chandpur','Dhampur','Nagina','Najibabad','Noorpur'],
  'Budaun': ['Budaun','Bilsi','Dataganj','Gunnaur','Sahaswan','Bisauli'],
  'Bulandshahr': ['Bulandshahr','Anupshahar','Debai','Gulaothi','Khurja','Shikarpur','Sikandrabad','Syana'],
  'Chandauli': ['Chandauli','Chakiya','Mughalsarai','Sakaldiha'],
  'Chitrakoot': ['Chitrakoot','Karvi','Mau','Manikpur','Pahadi'],
  'Deoria': ['Deoria','Bhatpar Rani','Salempur'],
  'Etah': ['Etah','Aliganj','Kasganj','Jalesar','Awagarh'],
  'Etawah': ['Etawah','Bharthana','Jaswantnagar','Saifai'],
  'Farrukhabad': ['Farrukhabad','Kaimganj','Amritpur'],
  'Fatehpur': ['Fatehpur','Bindki','Khaga'],
  'Firozabad': ['Firozabad','Jasrana','Shikohabad','Tundla'],
  'Gautam Buddha Nagar': ['Gautam Buddha Nagar','Dadri','Jewar'],
  'Ghaziabad': ['Ghaziabad','Hapur','Modinagar','Muradnagar'],
  'Ghazipur': ['Ghazipur','Jakhanian','Mohammadabad','Saidpur','Zamania'],
  'Gonda': ['Gonda','Karnailganj','Mankapur','Nawabganj','Tarabganj'],
  'Gorakhpur': ['Gorakhpur','Bansgaon','Chauri Chaura','Gola','Khajni','Sadar'],
  'Hamirpur': ['Hamirpur','Maudaha','Rath','Sarila'],
  'Hapur': ['Hapur','Dhaulana','Garhmukteshwar','Pilkhuwa'],
  'Hardoi': ['Hardoi','Bilgram','Sandila','Shahabad','Sandi'],
  'Hathras': ['Hathras','Sadabad','Sasni','Sikandra Rao'],
  'Jalaun': ['Jalaun','Konch','Madhogarh','Orai'],
  'Jaunpur': ['Jaunpur','Badlapur','Kerakat','Machhali Shahar','Mariahu','Shahganj'],
  'Jhansi': ['Jhansi','Garautha','Moth','Mauranipur'],
  'Kannauj': ['Kannauj','Chhibramau','Tirwa'],
  'Kanpur Dehat': ['Akbarpur','Bhognipur','Derapur','Ghatampur','Rasoolabad','Sikandra'],
  'Kanpur Nagar': ['Kanpur','Bilhaur','Ghatampur','Sarsaul'],
  'Kasganj': ['Kasganj','Ganj Dundwara','Patiyali','Sahawar','Soron'],
  'Kaushambi': ['Kaushambi','Chail','Manjhanpur','Sirathu'],
  'Kheri': ['Lakhimpur','Gola','Mohammadi','Nighasan','Palia'],
  'Kushinagar': ['Kushinagar','Padrauna','Ramkola','Hata'],
  'Lalitpur': ['Lalitpur','Maharoni','Mehrauni','Talbehat'],
  'Lucknow': ['Lucknow','Bakshi Ka Talab','Malihabad','Mohanlalganj','Sarojini Nagar'],
  'Maharajganj': ['Maharajganj','Nautanwa','Nichlaul','Pharenda'],
  'Mahoba': ['Mahoba','Charkhari','Kulpahar'],
  'Mainpuri': ['Mainpuri','Bhogaon','Ghiror','Karhal','Kishni'],
  'Mathura': ['Mathura','Chhata','Mant','Mat','Govardhan'],
  'Mau': ['Mau','Ghosi','Mohammadabad Gohna','Ratanpura'],
  'Meerut': ['Meerut','Hastinapur','Mawana','Parikshitgarh','Sardhana','Daurala'],
  'Mirzapur': ['Mirzapur','Chunar','Lalganj','Marihan','Madihan'],
  'Moradabad': ['Moradabad','Bilari','Chandausi','Sambhal','Thakurdwara'],
  'Muzaffarnagar': ['Muzaffarnagar','Budhana','Jansath','Kairana','Khatauli','Shamli'],
  'Pilibhit': ['Pilibhit','Bisalpur','Puranpur'],
  'Pratapgarh': ['Pratapgarh','Kunda','Lalganj','Patti','Raniganj'],
  'Prayagraj': ['Prayagraj','Bara','Handia','Karchana','Koraon','Meja','Phulpur','Soraon','Sringverpur'],
  'Rae Bareli': ['Rae Bareli','Bachhrawan','Dalmau','Lalganj','Maharajganj','Salon','Tiloi'],
  'Rampur': ['Rampur','Bilaspur','Milak','Shahabad','Suar','Chamraua'],
  'Saharanpur': ['Saharanpur','Behat','Deoband','Gangoh','Nakur','Rampur Maniharan'],
  'Sambhal': ['Sambhal','Bahjoi','Chandausi','Gunnaur','Rajpura'],
  'Sant Kabir Nagar': ['Khalilabad','Mehdawal'],
  'Shahjahanpur': ['Shahjahanpur','Jalalabad','Khutar','Powayan','Tilhar'],
  'Shamli': ['Shamli','Kairana','Thana Bhawan','Un'],
  'Shravasti': ['Shravasti','Bhinga','Ikauna'],
  'Siddharthnagar': ['Naugarh','Bansi','Domariyaganj','Shohratgarh','Itwa'],
  'Sitapur': ['Sitapur','Biswan','Laharpur','Mahmoodabad','Misrikh','Sidhauli'],
  'Sonbhadra': ['Robertsganj','Duddhi','Ghorawal'],
  'Sultanpur': ['Sultanpur','Kadipur','Lambhua','Musafirkhana'],
  'Unnao': ['Unnao','Bangarmau','Hasanganj','Purwa','Safipur'],
  'Varanasi': ['Varanasi','Pindra','Rajatalab','Kashi Vidyapeeth']
};

// ===== AMETHI BLOCKS (by Tehsil) =====
var UP_BLOCKS = {
  'Amethi-Amethi':       ['Amethi','Bhadar','Bhetua','Sangrampur'],
  'Amethi-Gauriganj':    ['Gauriganj','Jamo','Shahgarh'],
  'Amethi-Musafirkhana': ['Musafirkhana','Jagdishpur','Shukul Bazar'],
  'Amethi-Tiloi':        ['Bahadurpur','Singhpur','Tiloi']
};

// ===== ALL 682 AMETHI GRAM PANCHAYATS (by Block) =====
var UP_GPS = {
  'Amethi-Amethi-Amethi': ['Agahar','Bahapur','Bariyapur','BeniPur','BhaganPur','Bhushari','Biyasiya','ChaturBhujPur','Dandupur','Darkha','Dehra','Derhapashar','Gaderi','Gangauli','Ghaghughar','Hatkila','HimmatGarh','JangalRamNagar','Kakwa','KatraMahaRani','KatraPhoolKunwar','Kherauna','Kohara','KorariGirdharShah','KusiTali','Loharta','LoniaPur','MahamadPur','MaharajPur','Mahaso','MahmoodPur','Mochwa','NainahaVartli','Naraini','Nuawan','Parsawan','PurabGaon','RaidayPur','RaipurPhulwari','RajapurKohra','RamDayPur','RamGarh','Rebha','Saidpur','SaraiKhema','SariaDubaan','SarvanPur','Tala','TrilokPur','UmaPurGanaPatti'],
  'Amethi-Amethi-Bhadar': ['Agresar','Alampur','Amtahi','Bahadurpur','BaidhikPur','BalipurDuhiya','Bhadar','Bhadaw','BhagiPur','BhavaPur','Bhewyi','Bhojpur','Cheera','Dahiyawa','Dasaipur','Demma','DurgaPur','GajiPur','Ghorha','Guduri','IsmailPur','Kalyanpur','KastooriPur','Khajha','Khanapur','Khargipur','KhargPur','Kurang','Lahna','Mangra','Mavaiya','Mochwa','NarbahanPur','NarharPur','Neudhya','Ngardeeh','Parsoyia','PiperPur','Raipur','RamchandraPur','RataPur','Rewda','Sangapur','SansariPur','Sariyya','Sawangee','Sigthee','SonaariKalan','Sonari','TeekarmaPhi','TrilokPur','Trishundi','Vasdevpur'],
  'Amethi-Amethi-Bhetua': ['Amayemafi','Arsahni','Baisara','Bandoiya','Basahoo','Bharetha','Bhetua','Bhimi','Bhusiyawan','Dharaimafi','Gairikpur','Ghatampur','Ghatkaur','Ghorha','Gungwachh','Haripur','Heerapur','Kadergaon','Kamsin','KanakSinghPur','Khadhar','KorariHeershah','KorariLachhanshah','Kuruwa','Laukuwa','Manderika','Manirampur','Mayi','Narsinghbhanpur','Naugirwan','PaschimDwara','Peeparpur','Pindoriya','PurabDwara','RajapurKalyan','Sanaha','SaraiyyaMohan','Sarunwava','Semra','Shahari','ShivgarhJalalpur','Sultanpur','Sumerpur','Thaura','Tikari','Tikawar','Uska'],
  'Amethi-Amethi-Sangrampur': ['AmmbarPur','BadaGaon','BadlaPur','BanvirPur','BhairoPur','Bhausinghpur','BhavalPur','Chanderiya','Dharaura','Dhoyen','GangaPur','GhorkhaPur','GoojiPur','Itauri','Jarauta','Kanoo','KansaPur','Karaundi','KarnaiPur','Kasara','KhauPurBhujurg','Madauli','MadhuPurKhadri','Mishrauli','NewadaKanoo','PataaPur','PunnPur','PureMihibShah','Sahjipur','Sangrampur','SaraiyyaKanoo','SariyyaBadgaon','ShukulPur','SonariKanoo','TaraPur','Thengha','Uttargaon'],
  'Amethi-Gauriganj-Gauriganj': ['AaniBaijal','Aintha','AnaPur','Argwan','AttaNagar','Babupur','BahaPur','BasaikPur','Bastidai','Basupur','Behta','Belkhaur','BenipurBaldeo','Bhatgawan','ChandaiPur','ChitePur','Darpipur','DharuPur','GarhaMafi','GauriPur','GujarTolal','Gulalpur','Gundur','Guwawan','Itaujapachhim','Jagdishpur','Jethauna','Jethumawi','Khajuri','Lugari','MadanMawi','Manjhwara','Mau','Narauli','Oripur','Padri','PaharGanj','Paiga','PathanPur','PureFajil','RaghiPur','RampurKodwa','Rauja','RohshiKhurd','RoshsiBujurg','Saitha','Sakrawa','Sambhava','SaraiBarwandSingh','SaraiBhagMani','SaraiHirdayShah','SariPur','Semhuvi','ShahbajPur','Songara','Sujanpur','Tikariya','TulsiPur'],
  'Amethi-Gauriganj-Jamo': ['Achalpur','Adilpur','Ahad','Aidhi','Ajabgarh','Alipur','Angrawan','Atrauli','Babupur','Baghaiya Kamalpur','Bajgarhi','Balbhaddarpur','Barauliya','Barehti','Barra','Bhawanigarh','Bhikhipur','Bhoe','Biripur','Chituhala','Dakhinwara','Digha Gopalpur','Duramau','Gaura','Gautampur','Ghatampur','Ghosiyan','Gogamau','Goriya Bad','Hardo','Hargaon','Harkarnapur','Heeruwa','Jamo','Janapur','Kalyanpur','Kapasi','Katari','Lakhnabasantpur','Lalpur','Lalupur Dhabiya','Lorikpur','Majhgawan','Mawai','Mayas','Munghi','Nadiwan','Nimi','Parashu Rampur','Purab Gaura','Pure Chitai','Rajamau','Rambakshgarh','Rampur Naurangabad','Rampurchaudhari','Ramshahnaupur','Resi','Sahapur','Samahai','Sarme','Shahpur Resi','Sirkhiri','Sukhi Baz Garh','Suratgarh','Tikra','Umaradih'],
  'Amethi-Gauriganj-Shahgarh': ['Afuia','Bahorakha','Bahorikpur','Bhaniyapur','Chandauki','Chilbili','DakkhinGaon','DulapurKalan','DulapurKhurd','Eksara','Garthauliya','Hardoiya','Hariharpur','Jalama','Juthipur','Kapoorpur','Kasrawan','Kauhar','Kishundaspur','Kitiyawan','Kushbaira','Lohangpur','NawadaKishunGarh','NohrePur','Paliya','Paniyar','Pichhaura','PurabGaon','PureEbadulla','RajapurKauhar','Ramshahpur','SewaiHemGarh','Shahgarh','Soraon','Tandawa','Tejgarh','Ulra','Usurapur','Zudiyapur'],
  'Amethi-Musafirkhana-Musafirkhana': ['Ankhari','AurangaBad','BarnaMubarakPur','Bhaddaur','Bhanauli','BhikhiPur','BisaraPaschim','BisaraPurab','ChandiPur','Chitaipur','Dadra','Dharauli','GajanPurDewariya','Gangerwa','Gunnaur','Jamuari','JhakhaShivPur','Kanjas','KankooPur','KapoorchandPur','Karpiya','KasthuniPaschim','KasthuniPurab','KeshawPur','Kochhit','Kodari','Kotwa','MaheshPur','ManaMadanpur','Manjhgawa','ManshahPur','MathaBhusunda','MuhideenPur','MusafirKhana','Nandaur','NaraAdhanPur','Newada','NizamuddinPur','PaliaChandapur','PaliaPurab','PindaraKarnai','PindaraMaharaj','PindaraThakur','PureMohammadNewaj','PurePahalWan','PureParwani','PurePremShah','Ranjitpur','Rasulabad','Rudauli','Sadipur','Salpur','SariyyaSabalShah','SoorPurKashiPur','TikharaBaijnath','UmaMishraPur'],
  'Amethi-Musafirkhana-Jagdishpur': ['Alinagar','Ankara','Asrafpur','BabuPurSharaia','Badhauli','Bagahi','Bagmira','Banbhariya','BechuGarh','Bhikhanpur','DakkhinGaon','DaulatpurLonhat','DaulatpurNisura','Deokali','Dhudehri','Dichauli','DulariNagar','GadriyaDih','Gaimau','GungeMau','Harimau','HasawaSukhn','HusainGanjKalan','IMLIGaon','Itraur','JalalPurTiwari','Kachnaaw','Kaima','Kamrauli','Kapuripur','Katehti','Kathaura','Khairatpur','KoiralaMubaraqpur','Lakhanipur','Mahemau','Malawa','Mangauli','Mangrauli','Mangraura','MarauchaTetarpur','MatiyariKalan','MauAwtara','Mirapur','Misharauli','MohabbatPur','Mubarakpur','MudupurUmraula','Naudand','NihalGarh','NihalPur','Nisura','Niyawa','PaliaPaschim','Palpur','ParwejPur','Pichhuti','PurabGaon','PurSohratSingh','RastaMau','Saresar','Sendurwa','SheshPur','Sindhiyawan','Siryari','Sithauli','Tanda','Thauri','Urwa','Utelwa','UttarGaon'],
  'Amethi-Musafirkhana-Shukul Bazar': ['Ahamadpur','AshisPur','BadalGarh','Baharpur','BakhtawarNagra','Balapur','Barsanda','Bhatmau','Bubupur','ByaureMau','DakkhinGaonKyar','Daranagar','DhaneshaRajput','Ekkatajpur','GayasPur','HarkhuMau','HasanpurTiwari','HusenPur','Indriya','JodilMau','KajiPur','KhalishBahadurPur','Khemmau','Kisuni','MahaunaPaschim','MahaunaPurab','MakhdumKalan','Mandwa','ManjhGaon','Mardanpur','MawaiyaRahmatGarh','MuhiuddinPur','Nadi','NewajMadarGarh','NihalGarhSaidaPatti','Nimpur','Pali','Para','PhundanPur','RasulPur','Sansarpur','Sathin','Sauna','Sewara','ShekhpurBhandra','Shivali','Sriyapirjyda','Tendua','Tenwasi','Tetarpur','UnchGaon','UrerMau','VirahimBajghar','VishambherPatti'],
  'Amethi-Tiloi-Bahadurpur': ['Baghail','BahadurpurDa','Basauni','BehtaMurtaja','BhadaiyaMahmoodpur','BojhiBhulaMau','Brahmani','FareedpurParwar','FatehpurMawaiya','JamalpurRampur','Kasimpur','KesariyaSalimpur','Khairahana','Khalispur','Kharauli','KisunpurKewae','KotwarMau','Mahmoodpur','MawaiAlampur','MohaiyaKesariya','Mohana','MubarakpurMukhatiya','Nakdiyapur','Nawawan','Nigohan','Odaree','Pidhi','PureBadyrai','Saimbasi1','SaraiMahesha','Sarwan','Tarauna','Tendva','Urwa'],
  'Amethi-Tiloi-Singhpur': ['AhirwaBhwani','AhmadabadPipari','Anguri','Azadpur','Bahua','Batiya','Bhanipur','Bhawanipur','Bhikhipur','Chilauli','Chiluli','Dandupur','DangiBarwaliya','Dhirapur','Fatepur','GadhiMahabal','Goyan','Hathrona','Inhauna','Jagatpur','Jainagara','Jaitpur','JehtaUsarha','Jilauli','Jiyapur','Jugrajpur','KaranGaon','KhanapurChapara','Khara','Kharagpur','Kharawa','Khekharuwa','Konchi','Kotwa','KukahaRampur','Lauli','Mahimanpur','MahiyaSenduriya','Mantepur','Mirzagarh','Naukhera','Panhauna','Perara','Perariya','Phoola','Rajapur','Ramganj','RampurPawara','RastaMau','RatwaliyaManjhar','Sadhiya','SaraiMadho','SatanPurwa','ShekhanGaon','Singhpur','Tedhai','Tikari','Usufnagar'],
  'Amethi-Tiloi-Tiloi': ['Agauna','Ahuri','AkbarpurFarsi','Alaipur','Ariyawan','AshapurGari','AshapurRuru','Asni1','Baghauna','Barkot','Basantpur','BelwaHasanpur','Berara','Besarwa','Bhadmar','Bhadnasa','Bhagirathpur','BhelaiKalan','Biraj','Chathuwa','Chaura','ChetraBujurg','Chingahi','Devkali','Dodhanpur','Garehari','Hanswa','Jamurwa','Janapur','Kamae','Koora','Kotwa2','Kutmara','Lihi','Lodhwariya','Marhauna','MeeraMau','Nasaratpur','Ondeeh','PakarGaon','PaschchimTiloi','PureDwandi','PureManimanihar','RajaMau1','Rajanpur','RajapurHalim','Ramae','Ramnagar','Saimbasi','Sangrampur','Satgawan','Savitapur','Semrota','ShahMau','Sijni','TamaMau','Thokarpur','Tiloi','Uttarpara']
};

// Header blocks for Amethi
var HDR_BLOCKS = {
  'Gauriganj':    ['Gauriganj','Jamo','Shahgarh'],
  'Amethi':       ['Amethi','Bhadar','Bhetua','Sangrampur'],
  'Musafirkhana': ['Musafirkhana','Jagdishpur','Shukul Bazar'],
  'Tiloi':        ['Bahadurpur','Singhpur','Tiloi']
};
