;(function () {	
	   
 'use strict';
	 
var Data = CMHA.Data = (function () {
	  
		
	/**
	App Class Initializing Object
	*/
	function Data($location){
		this.location = $location;
	}
	
	Data.prototype = {
	 
		 getData : function (category) {

		 var Services = [
	            {"category": "abuse", "title": "Assaulted Women’s Helpline", "phone": "416-863-0511", "tollFree":"1-866-863-0511",  "email":""},
				{"category": "abuse", "title": "Caledon Dufferin Victim Services", "phone": "519-942-1452", "tollFree":"1-888-743-6496", "mobile":"905-951-3838", "email":"info@cdvs.ca"},
				{"category": "abuse", "title": "Catholic Cross-cultural Services / Violence Against Women", "ShortText": "Individual counselling and group support for immigrant women victims of assault/abuse.", "phone": "905-457-7740", "mobile":"905-951-3838", "email":"rbynoe@ccspeel.org"},
				{"category": "abuse", "title": "Chantel’s Place",  "phone": "905-848-7580 x2548"},
				{"category": "abuse", "title": "Dufferin Sexual Abuse Helpline",  "phone": "519-942-1980"},
				{"category": "abuse", "title": "Family Transition Place", "phone": "905-584-4357 (Peel)", "mobile":"519-941-4357 (Dufferin)","tollFree":"1-800-265-9178","website":"www.familytransitionplace.ca"},
				{"category": "abuse", "title": "Hope 24/7 / Sexual Assault / Rape Crisis Centre", "phone": "905-792-0821", "tollFree":"1-800-810-0180","website":"www.hope247.ca"},
 				{"category": "abuse", "title": "Interim Place - South (Women & Children)", "phone": "905-403-0864", "website":"www.womensadvocatesouth@intermplace.com"},
				{"category": "abuse", "title": "Interim Place - North (Women & Children)", "phone": "905-676-8515", "website":"www.womensadvocatenorth@intermplace.com"},
				{"category": "abuse", "title": "Peel Children’s Aid Society","phone": "905-363-6131"},
				{"category": "abuse", "title": "Peel Children’s Centre / Sexual Abuse Treatment", "phone": "905-451-4655","featured":"true"},
				{"category": "abuse", "title": "Peel Elder Abuse Support Program /24/7/365", "phone": "905-459-7777 (Brampton & Mississauga)", "tollFree":"1-877-298-5444 (Caledon)"},
				{"category": "abuse", "title": "Salvation Army Family Life Resource Centre ", "phone": "905-451-4115", "email":"info@ShelterBrampton.com"},
				{"category": "abuse", "title": "Victim Services of Peel", "phone": "905-568-1068","email":"info@vsp.org"},
				
				{"category": "addictions", "title": "Alcoholics Anonymous", "phone": "1-866-715-0005","tollFree":"1-877-404-5591", "website":"www.aatoronto.org"},
				{"category": "addictions", "title": "Born to be Free", "phone": "519-942-0736","ShortText":"A Christian based support group for people struggling with an addiction, and for those who have someone they care about dealing with an addiction."},
				{"category": "addictions", "title": "CAMH Medical Withdrawal Management Services", "phone": "416-535-8501 X26071", "website":"ww.camh.ca"},
				{"category": "addictions", "title": "CMHA Peel Dufferin - Impact/ Canadian Mental Health Association Peel Dufferin (For youth ages 12 -18)", "website":"ww.cmhapeeldufferin.ca", "phone": "905-451-2123","ShortText":"The IMPACT program (youth 12-18) focuses on  substance abuse education and harm reduction strategies.  Individualized, community-based supportive counselling is also available to youth regarding substance use, mental health and recovery."},
				{"category": "addictions", "title": "Community Alcohol & Drug Service (Homewood)", "phone": "905-963-0063 (Peel)","tollFree":"519-836-5733 x2396 (Dufferin)"},
				{"category": "addictions", "title": "Credit Valley Addictions and Concurrent Disorders Centre", "phone": "905-813-4402"},
				{"category": "addictions", "title": "Drug and Alcohol Helpline", "phone": "1-800-565-8603"},
				{"category": "addictions", "title": "Family Transition Place", "phone": "905-584-4357 (Peel)","mobile": "519-941-4357 (Dufferin)","tollFree":"1-800-265-9178","website":"familytransitionplace.ca"},
				{"category": "addictions", "title": "Hope Place Centres / Men’s Treatment Centre (Halton Recovery House)", "phone": "905-878-1120"},
				{"category": "addictions", "title": "Hope Place Centres / Women's Treatment Centre Milton", "phone": "905-875-3214 x103"},
				{"category": "addictions", "title": "Hope Place Centres / Community Based Treatment Centre Oakville", "phone": "905-465-3324", "tollFree":"1-877-399-7299"},
				{"category": "addictions", "title": "The Jean Tweed Centre", "phone": "647-459-3173", "mobile":"647-222-6562","website":"jeantweed.com/IWantHelp"},
				{"category": "addictions", "title": "Narcotics Anonymous", "phone": "1-888-811-3887"},
				{"category": "addictions", "title": "Ontario Problem Gambling Helpline", "phone": "1-888-230-3505","website":"connexontario.ca"},
				{"category": "addictions", "title": "Peel Works Needle Exchange", "phone": "647-225-1623"},
				{"category": "addictions", "title": "Peel Youth Substance Abuse Program / (YMCA) 14 - 24 years", "phone": "905-276-9322 x216", "email":"pixie.umadhay@wmcagta.org"},
				{"category": "addictions", "title": "Peel Addiction Assessment & Referral Centre (PAARC)", "phone": "905-629-1007","mobile":"641-462-1567","website":"paarc.com/programs"},
				{"category": "addictions", "title": "Punjabi Community Health Services", "phone": "905-677-0889"},
				{"category": "addictions", "title": "William Osler Health System Withdrawl Management Centre", "phone": " 905-456-3500 x231","website":"williamoslerhc.on.ca"},
				{"category": "addictions", "title": "William Osler Health System Addiction Counselling Services", "phone": " 905-796-3500"},

				{"category": "bereavment", "title": "Arborcare", "ShortText":"Follow-up, 6-week support group after bereavement and suicide at Scotts Funeral Home, 289 Main. St. North (North of Queen) in Brampton and 420 Dundas St. East (East of Hwy#10) in Mississauga.","phone": "416-863-0511", "tollFree":"1-866-863-0511", "email":"scott@arborcarememorial.com"},
				{"category": "bereavment", "title": "Bereaved Families of Ontario, Halton/Peel", "ShortText":"Self-help groups (closed) for various aspects of bereavement - call for information about meeting dates and times.", "phone": "905-848-4337 ", "email":"info@bereavedfamilies"},
				{"category": "bereavment", "title": "Community of People Extending Support", "ShortText":"A 6-week support group for people who share a similar experience: bereavement - 6-week groups, 4 times each year, call for information (Turner & Porter Funeral Homes)." ,"phone": "416-767-6793 ", "email":"comments@turnerporter.ca"},
				{"category": "bereavment", "title": "Coping Centre",  "phone": "519-650-0852", "tollFree":"1-877-554-4498"},
				{"category": "bereavment", "title": "Heart House Hospice",  "phone": "905-712-8119 ", "email":"info@hearthouse.com"},
				{"category": "bereavment", "title": "Hospice Caledon",  "phone": "905-951-3534"},
				{"category": "bereavment", "title": "Perinatal Bereavement Services Ontario",  "phone": "1-888-301-7276"},
				{"category": "bereavment", "title": "Saint Elizabeth Health Care", "phone": "905-826-0854", "email":"peelsdc@stelizabeth.com"},
				{"category": "bereavment", "title": "Survivor Support Program", "ShortText":"Supports adult family members, friends or co-workers grieving a death by suicide or homicide – leave a message for meeting information.", "phone": "416-595-1716  ", "email":"alex@torontodistresscentre.com"},
				
			
				{"category": "communityHealth", "title": "Albion Neighbourhood Services", "phone": "416-740-3704", "email":"ans@albionservices.ca"},
				{"category": "communityHealth", "title": "Bramalea Community Health Centre", "phone": "905-602-4082", "email":"ans@albionservices.ca", "ShortText":"Serving people with barriers to accessing health care in L6T, L6R, and L6S postal codes"}, 
				{"category": "communityHealth", "title": "East Mississauga Community Health Centre", "phone": "905-451-8090", "website":"mississauga@lampchc.org", "ShortText":"Serving people from Lake Ontario to Matheson BLVD; Hurontario St. to Etobicoke Creek."}, 
				{"category": "communityHealth", "title": "Four Corners Malton", "phone": "905-677-9599"},
	            {"category": "communityHealth", "title": "Homewood Heath Centre", "phone": "905-963-0063 (Peel)", "mobile":"519-824-1010  (Dufferin)"}, 
	            {"category": "communityHealth", "title": "Reconnect Community Health Services", "phone": "416-248-2050"}, 
				{"category": "communityHealth", "title": "Rexdale Community Health Centre", "phone": "416- 745-0062"}, 	
				{"category": "communityHealth", "title": "Rexdale Women's Centre", "phone": "416- 745-0062", "website":"www.rexdalewomen.org"},
				{"category": "communityHealth", "title": "Transgender Health Care", "phone": "519-780-5298"},


				{"category": "counselling", "title": "Associated Youth Services of Peel", "phone": "905-451-4655"}, 
				{"category": "counselling", "title": "Canadian Hearing Society ", "phone": " 905-608-0271", "mobile":"(tty) 647-260-0117","email":"info@chs.ca"}, 
				{"category": "counselling", "title": "Catholic Family Services of Peel Dufferin ", "phone": "905-450-1608","mobile":"905-897-1644 "}, 
				{"category": "counselling", "title": "Canadian Mental Health Association Peel Dufferin Counselling services", "phone": "905-451-2123"}, 
				{"category": "counselling", "title": "Dufferin Child & Family Services Children's Mental Health Service", "ShortText":"(18 and under)", "phone": "519-941-1530", "tollFree":"1-888-940-0584","featured":"true"}, 
				{"category": "counselling", "title": "Elizabeth Fry Society of Peel-Halton", "ShortText":"For female offenders, including anger management ", "phone": "905-459-1315", "email":"efrypeelhalton.ca"}, 
				{"category": "counselling", "title": "Family Services of Peel", "ShortText":"For female offenders, including anger management", "phone": "905-453-5775", "email":"fsp@fspeel.org"}, 
				{"category": "counselling", "title": "Family Transition Place", "ShortText":"Woman Abuse, Sexual Abuse (women & men), Groups & Workshops", "phone": "905-584-4357","tollFree":"1-800-265-9178","mobile":"519-941-4357", "website":"adminfamilytransition.ca"}, 
				{"category": "counselling", "title": "Hope 24/7", "ShortText":"Individual and group counselling for survivors of sexual assault.", "phone": "905-792-0821"}, 
				{"category": "counselling", "title": "John Howard Society – Peel Halton Dufferin", "ShortText":"For male offenders, including anger management.", "phone": "905-459-2205 "}, 
				{"category": "counselling", "title": "MIAG - Multicultural Inter-Agency Group of Peel", "ShortText":"Centre for Diverse Women & Families.", "phone": "905-270-6252"}, 
				{"category": "counselling", "title": "Newcomer Centre of Peel /Crisis Counselling", "ShortText":"Free counselling service open to Permanent Resident, Convention Refugees and Live-In Caregivers.", "phone": "905-306-0577 X384"}, 
				{"category": "counselling", "title": "Nexus Youth Centre / 12 - 24 years", "ShortText":"For male offenders, including anger management.", "phone": "905-566-1883", "website":"nexusyouth.ca"}, 
				{"category": "counselling", "title": "Peel HIV/AIDS Network / Birth - 18 years", "phone": "905-362-2025", "tollFree":"1-866-896-8700", "website":"phan.ca"}, 
				{"category": "counselling", "title": "Peel Children’s Centre / Birth - 18 years", "ShortText":" Individuals, groups, parents.", "phone": "905-451-4655","website":"peelcc.org"}, 
				{"category": "counselling", "title": "Rapport Youth and Family Services / 12 - 20 years", "phone": "905-455-4100"}, 
				{"category": "counselling", "title": "Salvation Army Mississauga Branch / Includes Anger Management", "phone": "905-279-3941", "website":"safamilyservices.com"}, 
				{"category": "counselling", "title": "Tangerine Walk-in Counselling", "phone": "905-795-3530","website":" tangerinewalkin.com"},
				{"category": "counselling", "title": "The Learning Disabilities Association", "phone": "905-791-4100", "mobile":"905-272-4100", "website":"ldapr.ca"}, 
				{"category": "counselling", "title": "Vita Centre", "ShortText":"For pregnant / parenting youth","phone": "905-502-7933", "email":"deborah@vitamanor.org"},
				

				{"category": "crisisServices", "title": "24.7 Crisis Support Peel","phone": "905-278-9036  ", "tollFree":"(Caledon) 1-888-811-2222"},
				{"category": "crisisServices", "title": "408 - Help Line / 24-7 / Crisis Support Line","phone": "416 408 4357"},
				{"category": "crisisServices", "title": "Community Torchlight Crisis Line", "ShortText":"Guelph / Wellington / Dufferin","phone": "519-821-0140 (Crisis)", "tollFree":"519-821-3760 (Distress)"},
				{"category": "crisisServices", "title": "Family Transition Place / Crisis Line","phone": "1-800-265-9178"},
				{"category": "crisisServices", "title": "Here 24-7 / Crisis Line","phone": "1-844-437-3247","website":"www.here247.ca"},
				{"category": "crisisServices", "title": "Youthdale Crisis","phone": "416-363-9990","featured":"true"},
				{"category": "crisisServices", "title": "Kids Help Phone","phone": "1-800-668-6868","website":"kidshelpphone.ca"},
				{"category": "crisisServices", "title": "Peel's Children Centre / Crisis Support for those under 18 years","phone": "416-410-8615","website":"www.peelcc.org"},	
				{"category": "crisisServices", "title": "Peel Crisis Capacity Network (PCCN)","phone": "905-273-4900","ShortText":"Provides time-limited crisis support to individuals (aged 11 and over) with a developmental disability or a dual diagnosis."},
				{"category": "crisisServices", "title": "The Postpartum Family Support Line/Monday- Friday 10am-10pm","phone": "905-459-8441 (Brampton & Mississauga)","mobile":"289-298-5468 (Caledon)","tollFree":" 1-877-298-5444 (TF)","website":"kidshelpphone.ca"},
				{"category": "crisisServices", "title": "Spectra Helpline (Formerly Telecare Distress Centre)","phone": "905-459-7777 (Brampton & Mississauga)","mobile":"1-877- 298-5444 (Caledon)","tollFree":"905-278-4890 (TTY)","ShortText":"Multilingual lines Mon- Fri 10am-10pm Cantonese, Hindi, Mandarin, Portuguese, Punjabi, Spanish, Urdu and English Lines."},
				{"category": "crisisServices", "title": "Square One /Older Adult Centre Telephone Reassurance Program","phone": "416-960-9276 (WARM)"},
				{"category": "crisisServices", "title": "The Warm Line / 8pm - Midnight (18+)","phone": "1-800-668-6868"},


				{"category": "culturally", "title": "African Community Services of Peel","phone": "905-460-9514"},
				{"category": "culturally", "title": "Brampton Multicultural Community Centre","phone": "905-790-8482","mobile":"905-828-1328"},
				{"category": "culturally", "title": "Catholic Cross-cultural Services","phone": "905-457-7740","mobile":"905-273-4140"},
				{"category": "culturally", "title": "Indus Community Services","phone": "905-275-2369"},
				{"category": "culturally", "title": "Muslim Community Services","phone": "(Brampton North) 905-790-1910 "},
				{"category": "culturally", "title": "Ontario Inter-Cultural Community Services","phone": "905-696-9963"},
				{"category": "culturally", "title": "PCHS (Punjabi Community Health Services)","phone": "905-790-0808 ","mobile":"905-677-088", "email":"admin.brampton@pchs4u.com "},
				{"category": "culturally", "title": "South Asian Welcome Centre Inc.","phone": "905-790-0676"},
				{"category": "culturally", "title": "United Achievers Community Services","phone": "905-455-6789"},
				{"category": "culturally", "title": "White Owl / Aboriginal Services","phone": "519-772-4399 X2798"},
				

				{"category": "distressLines", "title": "24.7 Crisis Support Peel", "phone": "905-278-9036","tollFree":"1-888-811-2222 (Caledon)"},
				{"category": "distressLines", "title": "408 - Help Line / 24-7 / Crisis Support Line", "phone": "416 408 4357"},
				{"category": "distressLines", "title": "Community Torchlight Youth Support Line", "ShortText":"Guelph / Wellington / Dufferin","phone": "519-821-5469  ","mobile":"(from area only) 1-888-821-3760"},
				{"category": "distressLines", "title": "Family Transition Place / Crisis Line", "phone": "1-800-265-9178"},
				{"category": "distressLines", "title": "Here 24-7 /Crisis Line", "phone": "1-844-437-3247","website":"www.here247.ca"},
				{"category": "distressLines", "title": "Youthdale Crisis", "phone": "416-363-9990"},
				{"category": "distressLines", "title": "Kids Help Phone", "phone": "1-800-668-6868","website":"kidshelpline.ca","featured":"true"},
				{"category": "distressLines", "title": "Peel's Children Centre / Crisis Support for those under 18 years", "phone": "416-410-8615","website":"www.peelcc.org"},
				{"category": "distressLines", "title": "Peel Crisis Capacity Network (PCCN)", "phone": "905-273-4900"},
				{"category": "distressLines", "title": "Peel Postpartum Family Support Line / Monday 10am – 10pm", "phone": "905-459-8441","mobile":"289-298-5468"},
				{"category": "distressLines", "title": "Spectra Helpline (Formerly Telecare Distress Centre)", "ShortText":"Multilingual lines Mon- Fri 10am-10pm Cantonese, Hindi, Mandarin, Portuguese, Punjabi, Spanish, Urdu and English Lines.","phone": "905-459-7777","mobile":"905-584-7770", "tollFree":"416-920-0497"},
				{"category": "distressLines", "title": "Square One / Older Adult Centre Telephone Reassurance Program", "ShortText":"50+ Daily contact for adults in Mississauga concerned about safety and isolation.","phone": "416-960-9276 (WARM)"},
				{"category": "distressLines", "title": "The Warm Line / 8am – midnight", "phone": "1-800-668-6868"},
				

				{"category": "employmentVocational", "title": "ACCES Employment / 8am – midnight", "phone": "905-454-2316 ","mobile":"905-361-2522","website":"www.accessemployment.ca"},
				{"category": "employmentVocational", "title": "Dufferin County, Orangeville Employment Resource Centre", "phone": "519-941-6991 x2010"},
				{"category": "employmentVocational", "title": "Employment Access / Disabilities", "phone": " 905-459-7890","mobile":"905-755-9734", "tollFree":"1-800-270-3861"},
				{"category":"employmentVocational", "title": "Employment Resources Centre (Peel Youth Village)", "phone": "905-791-5576","website":"peelyouthvillage.ca","featured":"true"},
				{"category": "employmentVocational", "title": "Employment Ontario Hotline / 8am – midnight", "phone": "1-800-387-5656","website":"servicecanada.gc.ca"},
				{"category": "employmentVocational","title":"John Howard Society Employment Services","phone": "905-459-0111","email":"info@johnhowardphd.ca","website":"johnhowardphd.ca"},
				{"category": "employmentVocational", "title": "Peel Career Assessment Services Inc.", "phone": "905-670-1967"},
				{"category": "employmentVocational", "title": "Ready, Willing and Able / Family Services of Peel", "phone": "905-453-5775","website":"fspeel.org"},
				{"category": "employmentVocational", "title": "Volunteer MBC", "phone": "905-238-2622","website":"www.volunteermbc.org"},
				{"category": "employmentVocational", "title": "YMCA Youth Employment Services", "phone": "905-276-9322 x200"},
				

				{"category": "familySupport", "title": "Angela's Place / Women's Services", "phone": "905-523-6277", "ShortText":"For mothers 21 and younger experiencing overwhelming responsibilities."},
				{"category": "familySupport", "title": "Association of Parent Support Groups of Ontario", "phone": "1-800-488-5666", "ShortText":"Self-help and support groups for parents of disruptive youth with weekly meetings in Bolton, Brampton, and Mississauga."},
				{"category": "familySupport", "title": "Children’s Mental Health of Ontario", "phone": "416-921-2109 ", "ShortText":"Assists families of people with schizophrenia through supportive services.", "website":"cmho.org","featured":"true"},
				{"category": "familySupport", "title": "Dufferin Child and Family Services", "phone": "519-941-1530", "ShortText":"Assisting families of people with schizophrenia through supportive services."},
				{"category": "familySupport", "title": "Dufferin Coalition for Kids", "phone": "519-940-9092"},
				{"category": "familySupport", "title": "Dufferin Parent Support Network", "phone": "519-940-8678"},
				{"category": "familySupport", "title": "Family Association for Mental Health Everywhere (FAME)", "phone": "905-488-7716  ", "mobile":"905-276-8316", "ShortText":"Support for families who have a member with any mental illness. Individual or group support available in: Mississauga, Brampton, Orangeville and Caledon. Also support for youth 13 - 17 and children 7 - 12 years old. Call for meeting times and locations."},
				{"category": "familySupport", "title": "Family Education Centre", "phone": "905-452-0332", "email":"info@familyedcentre.org"},
				{"category": "familySupport", "title": "Mood Disorders Association of Ontario", "phone": "1-866-363-MOOD (6663)","ShortText":"Offers telephone, counselling, and video counselling for families that have a loved one with a mental health issue."},
				{"category": "familySupport", "title": "Schizophrenia Society of Ontario, Halton Peel", "phone": "905-338-2112", "ShortText":"Assists families of people with schizophrenia through supportive services.", "email":"msue-ping@schizophrenia.on.ca"},
				{"category": "familySupport", "title": "Yorktown Child and Family Services", "phone": " 416-394-2424", "ShortText":"Offers a comprehensive range of mental health services to children, youth and their families."},
				
				
				{"category": "financialSupport", "title": "Ontario Disability Support Program (ODSP-MCSS)", "phone": "905-460-5025","mobile":"905-897-3100","website":"www.peelregion.ca"},
				{"category": "financialSupport", "title": "Ontario Works (Dufferin Country)","phone":"519-941-6991"},
				{"category": "financialSupport", "title": "Ontario Works (Etobicoke)","phone":"416-392-6402"},
				{"category": "financialSupport", "title": "Ontario Works (Region of Peel)","phone":"905-793-9200","website":"www.peelregion.ca"},	
				
				
				{"category": "foodBanks", "title": "Caledon Food Bank", "phone": "905-951-2300", "email":"info@ccs4u.org"},
				{"category": "foodBanks", "title": "The Compass", "phone": "905-274-9309", "email":"info@thecompass.ca"},
				{"category": "foodBanks", "title": "The Daily Bread Food Bank", "phone": "416-203-0050", "website":"www.dailybread.ca"},
				{"category": "foodBanks", "title": "Eden Food for Change", "phone": "905-785-3651", "email":"info@edenfoodbank.org"},
				{"category": "foodBanks", "title": "The Exchange (Caledon)", "phone": "289-966-1715"},
				{"category": "foodBanks", "title": "Foodpath", "phone": "905-270-5589", "email":"info@themississaugafoodbank.org"},
				{"category": "foodBanks", "title": "ICNA Relief Canada", "phone": "905-858-1067", "website":"www.icnareliefcanada.ca"},
				{"category": "foodBanks", "title": "Knight’s Table / $1 meals / Pantry", "phone": "905-454-8725", "website":"knightstable.org"},
				{"category": "foodBanks", "title": "Malton Neighbourhood Services - Food Pantry", "phone": "905-677-6270", "website":"www.mnsinfo.org"},	
				{"category": "foodBanks", "title": "Meals on Wheels / Peel", "phone": "905-453-4140", "mobile":"905-857-7651", "tollFree":"905-820-4026", "website":"www.mealsonwheels.ca","ShortText":"Provides nutritious meals to seniors and people with disabilities who can't prepare meals for themselves."},
				{"category": "foodBanks", "title": "Meals on Wheels / Orangeville - Shelburne", "phone": "519- 925-5452"},
				{"category": "foodBanks", "title": "The Open Door", "phone": "905-276-9136", "email":"theopendoor@hotmail.com"},
				{"category": "foodBanks", "title": "Orangeville Food Bank", "phone": "519-942-0638", "email":"orangevillefoodbank@hotmail.com"},
				{"category": "foodBanks", "title": "Salvation Army", "phone": "905-451-8840", "mobile":"905-279-3941", "tollFree":"519-943-1203"},
				{"category": "foodBanks", "title": "Seva Food Bank", "phone": "905-361-7382 ", "website":"sevafoodbank.com"},
				{"category": "foodBanks", "title": "Shepherd’s Cupboard", "phone": "519-925-2600 x350"},
				{"category": "foodBanks", "title": "St. John of the Cross Food Pantry", "phone": "905-821-1331"},
				{"category": "foodBanks", "title": "St. Louise Outreach", "phone": "905-454-2144 ", "website":"stelouisefoodbank.ca"},
				{"category": "foodBanks", "title": "Thistletown Community Services Unit / Serving Rexdale and Etobicoke", "phone": "416-745-2822"},
				
				
				{"category": "governmentHealth", "title": "Central West Local Health Integration Network (LHIN)", "phone": "905-455-1281", "email":"centralwest@ihns.on.ca"},
				{"category": "governmentHealth", "title": "Developmental Services Ontario / Adult developmental services", "phone": "905-453-2747 (Peel)","mobile":"519-821-5716 (Dufferin)","tollFree":"1-888-941-1121 (Toll Free)"},
				{"category": "governmentHealth", "title": "Health Care Connect", "phone": "1-800-445-1822", "ShortText":"Mon - Fri 9am-5pm. How to find or change family doctor or nurse practicioner."},
				{"category": "governmentHealth", "title": "Health Canada, Ontario Region Info Line", "phone": "416-973-4389"},
				{"category": "governmentHealth", "title": "Ministry of Children and Youth Services", "phone": "905-567-7177","featured":"true"},
				{"category": "governmentHealth", "title": "Mississauga Halton Local Health Integration Network (LHIN)", "phone": "905-337-7131"},
				{"category": "governmentHealth", "title": "Ombudsman Ontario (Complaints Number)", "phone": "1-800-263-1830"},
				{"category": "governmentHealth", "title": "Ontario Patient Ombudsman (Complaints Number)", "phone": "1-888-321-0339", "website":"www.patientombudsman.ca"},
				{"category": "governmentHealth", "title": "Region of Peel (Customer Service)", "phone": "905-791-7800","featured":"true"},
				{"category": "governmentHealth", "title": "Service Ontario - Brampton, Caledon and Mississauga", "phone": "1-866-532-3161"},
				{"category": "governmentHealth", "title": "Telehealth / Free medical advice", "phone": "1-866-790-0000"},
				

				{"category": "shelters", "title": "Lakeshore Community Outreach Centre, the Compass", "phone": "905-274-9309"},
				{"category": "shelters", "title": "Peel Street Helpline", "phone": "905-796-5888"},
				{"category": "shelters", "title": "Preventing Homelessness in Peel", "phone": "905-793-9200"},
				{"category": "shelters", "title": "Regeneration Community Outreach", "phone": "905-796-5888", "email":"info@regenbrampton.com", "ShortText":"A self-help group for the homeless/marginalized population in Brampton. Coffee and light snacks are provided. Every Thursday, 11;30 sm - 1pm at St. Paul's United Church in the Community Room."},
				{"category": "shelters", "title": "Torchlight Emergency Shelter Resource Line", "phone": "519-767-6594 (24/7)", "website":"www/tprcj;ogjtcamada.org", "ShortText":"Telephone service for anyone in need of a safe, emergency temporary shelter in Dufferin County."},
			

				{"category": "hospitalServices", "title": "Centre for Addiction and Mental Health (CAMH)/ Centralized Assessment, Triange and Support", "phone": "(Outpatient) 416-535-8501 x6878", "mobile":"(Emergency) 416-535-8501 x6885", "email":"info@camh.ca"},
				{"category": "hospitalServices", "title": "Child, Youth and Family Program / Mood and Anxiety Service", "phone": "416-535-8501 x4366", "website":"camh.ca"},
				{"category": "hospitalServices", "title": "Psychogeriatric Assessment Consultation & Education (PACE Peel) / North of Hwy 401", "phone": "416-535-8501 x7716", "website":" camh.ca"},
				{"category": "hospitalServices", "title": "Headwaters Health Care Centre", "phone": "519-941-2410", "website":"headwatershealth.ca"},
				{"category": "hospitalServices", "title": "Trillium Health Partners", "phone": "416-521-4131","mobile":"905-338-287","website":"www.one-link.ca"},
				{"category": "hospitalServices", "title": "Child & Adolescent Services / Birth - 18 years", "phone": "905-451-4655", "website":"williamoslerhs.ca"},
				{"category": "hospitalServices", "title": "Credit Valley Hospital", "phone": "905-813-2200", "website":"www.trilliumhealthpartners.ca"},
				{"category": "hospitalServices", "title": "Mississauga Hospital", "phone": "905-813-2200", "website":"www.trilliumhealthpartners.ca"},
				{"category": "hospitalServices", "title": "William Osler Health System / Etobicoke General Hospital", "phone": "416-494-2120", "website":"williamoslerhs.ca"},
				{"category": "hospitalServices", "title": "Mental Health Intake / Brampton Civic Hospital ", "phone": "905-494-6709", "website":"williamoslerhs.ca"},
				{"category": "hospitalServices", "title": "Mental Health Intake / Etobicoke General Hospital", "phone": "905-494-2120 x3236", "website":"williamoslerhs.ca"},
				

				{"category": "housing", "title": "Peel Living", "phone": "905-453-1300 ", "website":"peelregion.ca"},
				{"category": "housing", "title": "Supportive Housing Dufferin", "phone": "1-877-761-6352"},
				{"category": "housing", "title": "Support Housing in Peel (SHIP)", "phone": "905-795-8742", "email":"info@shipshey.ca"},


				{"category": "informationReferral", "title": "211 Peel", "phone": "211"},
				{"category": "informationReferral", "title": "Brampton Neighbourhood Resource Centre", "phone": "905-452-1262", "website":"bnrc.org"},
				{"category": "informationReferral", "title": "Caledon Community Services", "phone": "905-951-2300", "email":"info@ccs4u.org"},
				{"category": "informationReferral", "title": "Centre for Addiction & Mental Health R. Samuel McLaughlin Info Line", "phone": "416-595-6111","tollFree":"1-800-463-6273", "email":"camh.net"},
				{"category": "informationReferral", "title": "CMHA Peel Information and Referral", "phone": "905-451-2123", "email":"info@cmhapeel.ca"},
				
				{"category": "informationReferral", "title": "Community Care Access Centre", "phone": "310-CCAC (2222)", "website":"healthcareathome.ca"},
				{"category": "informationReferral", "title": "Consumer/Survivor Info Resource Centre", "phone": "416-595-2882", "email":"csinfo@camh.ca"},
				{"category": "informationReferral", "title": "Dixie-Bloor Neighbourhood Services", "phone": "905-629-1873", "email":"info@dixiebloor.ca"},
				{"category": "informationReferral", "title": "Health Line Peel", "phone": "905-799-7700"},
				{"category": "informationReferral", "title": "Malton Neighbourhood Services", "phone": "905-677-6270", "website":"mnsinfo.org"},
				{"category": "informationReferral", "title": "Mental Heath Helpline", "phone": "1-866-531-2600", "website":"mentalhealthhelpline.ca"},
				{"category": "informationReferral", "title": "Multicultural Inter-Agency Group (MIAG)", "phone": "905-270-6252 ", "website":"miag.ca"},
				{"category": "informationReferral", "title": "National Eating Disorder Info Centre (NEDIC)", "phone": "1-866-633-4220"},
				{"category": "informationReferral", "title": "Newcomer Centre of Peel", "phone": "905-306-0577", "email":"info@ncpeel.ca"},
				{"category": "informationReferral", "title": "Service Ontario", "phone": "1-866-532-3161", "website":"serviceontario.ca"},
				{"category": "informationReferral", "title": "Telehealth", "phone": "1-866-797-0000"},
				{"category": "informationReferral", "title": "Victim Support Line, Ministry of the Attorney General", "phone": "416-314-2447", "tollFree":"1-888-579-2888", "website":"ontario.ca"},

				
				{"category": "legalAdvocacy", "title": "ARCH Advocacy Resource Centre", "phone": "416-482-8255", "website":"archdisabilitylaw.ca"},
				{"category": "legalAdvocacy", "title": "Associated Youth Services of Peel", "phone": "905-890-5222", "website":"aysp.ca","featured":"true"},
				{"category": "legalAdvocacy", "title": "CMHA Peel Court Support Services", "phone": "905-456-4700 x5663 and x5666 "},
				{"category": "legalAdvocacy", "title": "Community Legal Education Ontario (CLEO)", "phone": "416-408-4420", "website":"www.cleo.on.ca/en"},
				{"category": "legalAdvocacy", "title": "Elizabeth Fry Society", "phone": "905-459-1315", "email":"efry@efrypeelhalton.ca"},	
				{"category": "legalAdvocacy", "title": "John Howard Society", "phone": "905-459-0111 ", "mobile":"905-275-9117","tollFree":"519-940-3061 ","website":"johnhoward.ca"},
				{"category": "legalAdvocacy", "title": "Labour Community Services of Peel", "phone": "905-696-7444", "mobile":"905-453-1723", "website":"lcspeel.bmdlc.org"},
				{"category": "legalAdvocacy", "title": "Legal Aid Ontario", "phone": "905-453-1723 ", "tollFree":"1-800-531-2227", "website":"legalaid.on.ca"},
				{"category": "legalAdvocacy", "title": "Mississauga Community Legal Services", "phone": "905-896-2050", "website":"legalclinicsinpeel.ca"},
				{"category": "legalAdvocacy", "title": "North Peel & Dufferin Community Legal Services serving Brampton, Caledon & Dufferin County", "phone": "905-455-0160", "tollFree":"1-866-455-0160"},
				{"category": "legalAdvocacy", "title": "Ontario Human Rights Commission", "phone": "1-800-387-9080", "website":"ohrc.on.ca"},
				{"category": "legalAdvocacy", "title": "Psychiatric Patient Advocate Office", "phone": "416-327-7000"},
				{"category": "legalAdvocacy", "title": "Public Guardian and Trustee", "phone": "416-326-2220"},
				{"category": "legalAdvocacy", "title": "Rexdale Community Legal Clinic", "phone": "416-741-5201"},
				{"category": "legalAdvocacy", "title": "Your Legal Rights", "phone": "416-408-4420"},


				{"category": "peerSupport","title": "Adult Children of Alcoholics", "phone": "416-631-3614" ,"website":"acetoronto.org", "ShortText":"Weekly meetings throughout the GTA."},
				{"category": "peerSupport", "title": "Al-Anon and Alateen", "phone": "416-410-3809" , "tollFree":"1-888-4AL-ANON (1-888-425-2666)", "ShortText":"12-step program to cope with the effect of someone else’s drinking. Alateen is strictly for youth (12 - 20 years)." , "website":"al-anon.alateen.on.ca"},
				{"category": "peerSupport", "title": "Alcoholics Anonymous (A.A.)", "tollFree": "1-877-404-5591" , "phone":"416-487-5391", "website":"aatoronto.org", "ShortText":"A self-help organization for people with alcohol abuse problems."},
				{"category": "peerSupport", "title": "Anxiety Empowered", "phone": "905-846-6657" ,"email":"info@heartlakechurch.com", "ShortText":"Tues. 7pm, Heart Lake Presbyterian Church, 25 Ruth Ave., Brampton"},
				{"category": "peerSupport", "title": "CMHA Peel Dufferin - Recovery West Drop- In", "phone": "905-451-3934" , "ShortText":"Drop-in, peer support & outreach. Drop-in at Brampton Community Door, 7700 Hurontario St., Unit 601(north end of plaza), Tues. - Fri. 4-8 pm and Sat. 12-4 pm."},
				{"category": "peerSupport", "title": "Cocaine Anonymous", "phone": "1-866-622-4636" , "website":"ca-on.org"},
				{"category": "peerSupport", "title": "Co-dependents Anonymous", "phone": "416-410-2767" , "ShortText":"12-step weekly support group for people who are unable to maintain functional relationships. Meets Mondays, 8-9pm, Unitarian Congregation, 84 South Service Rd, Mississauga - Call Angela."},
				{"category": "peerSupport", "title": "Consumer Council", "phone": "905-451-1718 x613" , "email":"consumercouncil@cmhapeel.ca", "ShortText":"Advocacy council to create a voice for people with mental health issues."},
				{"category": "peerSupport", "title": "Fibromyalgia Support Group", "phone": "905-791-2032 " , "mobile":"905-625-6425", "email":"fibrosupport@rogers.com"},
				{"category": "peerSupport", "title": "Friends & Advocates Peel", "phone": "905-452-1002 " , "email":"contact@fapeel.org"},
				{"category": "peerSupport", "title": "Gamblers Anonymous", "phone": "416-366-7613" , "website":"gamblersanonymoustoronto.org","ShortText":"Weekly support group for men and women working to recover from their common gambling problem."},
				{"category": "peerSupport", "title": "Narcotics Anonymous", "phone": "1-888-811-3887" ,"website":"torontona.org", "ShortText":"Weekly, open support group for recovering addicts helping each other stay clean."},
				{"category": "peerSupport", "title": "Recovery Incorporated", "phone": "(George M.) 905-607-1033", "mobile":"(Roseanne A.) 905-812-7935", "ShortText":"Provides self-help groups to people suffering from nervous and emotional stress, panic disorders, depression, etc. A freewill offering is taken at each meeting. Meetings: Thursdays - 7:30pm, at Cooksville United Church, 2500 Mimosa Row, Mississauga. Mondays - 7:00pm, Grace United Church, 156 Main St. N, Brampton (Meeting room posted at front entrance)."},
				{"category": "peerSupport", "title": "Women for Sobriety", "phone": "519-307-3307" , "ShortText":"Group for women with alcohol or drug dependencies."},


				{"category": "seniorServices", "title":"The Advocacy Centre for the Elderly", "phone": "416-598-2656" , "website":"www.advocacycentreelderly.org"},
				{"category": "seniorServices", "title":"Alzheimer Society of Peel","phone": "905-278-3667 (Peel)","mobile":"519-941-1221 (Dufferin)","email":"n.bhamra@alzheimerpeel.com"},
				{"category": "seniorServices", "title":"CANES", "phone": "416-743-3892" , "website":"www.canes.on.ca","ShortText":"Ages 55 and up - Serves  Brampton ; Etobicoke Central, Etobicoke North, Malton, Mississauga, Toronto, Woodbridge."},	
				{"category": "seniorServices", "title": "Elder Help Peel", "phone": "905-457-6055" , "email":"info@elderhelppeel.org", "ShortText":"Ages 55 and up – Social recreational activities."},
				{"category": "seniorServices", "title": "Flower City Seniors Recreation Centre", "phone": "905-874-3500"},
				{"category": "seniorServices", "title": "Government of Canada Services for Seniors", "phone": "1-800-622-6232", "tollFree":"1-800-926-9105"},
				{"category": "seniorServices", "title": "Meals on Wheels / Peel", "phone": "905-453-4140 (Brampton)","mobile":"905-857-7651 (Caledon)","tollFree":"519-925-5452 (Dufferin) 905-820-4026 (Mississauga)","website":"www.mealsonwheel.ca"},
				{"category": "seniorServices", "title": "Peel Elder Abuse Support Program / 24/7/365", "phone": "905-459-7777 (Brampton & Mississauga)" , "tollFree":"1-877-298-5444 (Caledon)"},
			 	{"category": "seniorServices", "title": "Peel Seniors Link Age 65 and up", "phone": "905-712-4413", "ShortText":"Age 65 and up"},
			 	{"category": "seniorServices", "title": "Peel Public Health", "phone": "905-799-7700"},
			 	{"category": "seniorServices", "title": "Red Cross Care Partners", "phone": "1-800-418-1111 "},
				{"category": "seniorServices", "title": "Square One Older Adult Centre", "phone": "905-452-7118","tollFree":"1-866-234-7073", "ShortText":"A seniors club centrally located at the Square One complex, which offers a variety of recreational activities designed for people over the age of 50"},
				{"category": "seniorServices", "title": "Supportive Housing in Peel (SHIP)", "phone": "905-795-8742", "email":"info@shipshey.ca"},
				{"category": "seniorServices", "title": "TeleCheck for Seniors (55+) Peel Region", "phone": "289-569-1201 (English support) 289-569-1201 (Latin America support)", "mobile":"289-569-1203 (Chinese support)","tollFree":"289-569-1204 (South Asian support)", "ShortText":"Multilingual support for isolated seniors (i.e. check-ins, medication reminders)"},
				{"category": "seniorServices", "title": "Trillium Health Partners / Seniors Mental Health Services", "phone": "416-521-4006"},
 				{"category": "seniorServices", "title": "William Osler Geriatric Outreach Program", "phone": "905-494-6482" ,"mobile":"905-494-6608", "ShortText":"65 years (or older) reside within the area served by the Central West LHIN. Referred by a Physician or Geriatric Emergency Management (GEM) Nurse."},
 

 				{"category": "youth", "title": "The Etobicoke Children's Centre", "phone": "416- 240-1111","email":"ecc@etobicokechildren.com", "featured":"true"},
				{"category": "youth", "title": "The Dam (Youth Drop-in Centre) / 13 - 19 years", "phone": "905-826-6558","website":"www.thedam.org","featured":"true"},
				{"category": "youth", "title": "Dixie Bloor Centre, Mississauga / 13 - 24 years", "phone": "905-629-1873 x300" , "ShortText":"Newcomer youth community engagement/youth lounge","featured":"true"},
				{"category": "youth", "title": "Dufferin Coalition for Kids", "phone": "519-940-9092","featured":"true"},
				{"category": "youth", "title": "Eclypse Youth Resource Centre", "mobile":"905-866-6900","featured":"true"},
				{"category": "youth", "title": "Free For All Foundation / Free", "phone": "905-499-4486","featured":"true"},
				{"category": "youth", "title": "Erin Mills Youth Centre", "phone": "905-820-3577","email":"info@erinmillsyouthcentre.com","featured":"true"},
				{"category": "youth", "title": "Mental Health Services for Children & Youth", "phone": "905-451-4655","website":"www.youthline.ca","featured":"true"},
				{"category": "youth", "title": "Nexus Youth Centre", "phone": "905-566-1883","featured":"true"},
				{"category": "youth", "title": "Peel's Children Centre", "phone": "905-791-5576","ShortText":"Treatment services for children, teenagers, and families who are having serious issues with relationships, feelings, or behaviour.","featured":"true"},
				{"category": "youth", "title": "Peel Youth Village / 16-30 years", "phone": "905-791-5576","featured":"true"},
				{"category": "youth", "title": "Torchlight Youth Support Line Guelph / Wellington / Dufferin", "phone": "519-821-5469 (24/7)","tollFree":"1-888-821-3760","website":"www.torchlightcanada.org","ShortText":"A drop-in social and support group for queer and trans adults over age of 18 who live in Peel Region.","featured":"true"},	
				{"category": "youth", "title": "Youth Beyond Barriers (YBB)", "phone": "1-800-762-8377 x460" , "ShortText":"Queer and trans youth, 12 - 18 years","featured":"true"},
				{"category": "youth", "title": "Youth Line", "phone": "1-800-268-9688","mobile":"(or Text: 647-694-4275)", "ShortText":"Toll free line, provided for youth for youth","featured":"true"},
				{"category": "youth", "title": "OUTline", "phone": "519-836-4550","mobile":"519-763-2255","website":"www.qlinks.ca/outline" ,"ShortText":"Supports LGBTTIQQ2S youth, 12-17 years. Online chat open everyday from 5-10pm","featured":"true"},

				{"category": "socialRecreation", "title": "City of Brampton & Mississauga", "ShortText":"311 (within Brampton & Mississauga City limits)","phone":"311"},
				{"category": "socialRecreation", "title": "Town of Caledon", "phone": "905-584-2272"},
				{"category": "socialRecreation", "title": "Town of Orangeville", "phone": "519-941-0440","email":"info@orangeville.ca"},
				{"category": "socialRecreation", "title": "Town of Shelburne", "phone": "519-925-2600"},	


				{"category": "shelters", "title": "Cawthra Road Shelter", "phone": "905-281-1272","email":"Nblessing.Anyanwu@peelregion.ca"},
				{"category": "shelters", "title": "Choices Youth Centre", "phone": "1-866-947-5970"},
				{"category": "shelters", "title": "Community Torchlight Emergency Shelter", "phone": "519-767-6594 ","tollFree":"(from area only) 1-888-821-3760","ShortText":"Guelph / Wellington / Dufferin"},
				{"category": "shelters", "title": "Family Transition Place", "phone": "905-584-4357","mobile":"519-941-4357","tollFree":"1-800-265-9178"},
				{"category": "shelters", "title": "Our Place Peel II Youth Shelter, Short-term", "phone": "905-238-1383"},
				{"category": "shelters", "title": "Peel Family Shelter", "phone": "905-272-7061"},
				{"category": "shelters", "title": "Peel Street Helpline / Peel Outreach Team", "phone": "1-877-848-8481"},
				{"category": "shelters", "title": "Wilkinson Road Shelter / Men only", "phone": "905-452-1335","mobile":"905-272-7061"}
				 	
	         ]
            
             var sorted = [];
	         for(var i = 0; i < Services.length; i++ ){
                if(category == Services[i].category){
                   sorted.push(Services[i]);
                }
	         }

	         return sorted;

	     }
	 
	   

    }
	  
   return Data;	
	
   })();


}).call(this);