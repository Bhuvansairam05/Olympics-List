const year2024 = [
    { "country": "United States", "gold": 40, "silver": 44, "bronze": 42, "total": 126 },
    { "country": "China", "gold": 40, "silver": 27, "bronze": 24, "total": 91 },
    { "country": "Great Britain", "gold": 14, "silver": 22, "bronze": 29, "total": 65 },
    { "country": "France", "gold": 16, "silver": 26, "bronze": 22, "total": 64 },
    { "country": "Australia", "gold": 18, "silver": 19, "bronze": 16, "total": 53 },
    { "country": "Japan", "gold": 20, "silver": 12, "bronze": 13, "total": 45 },
    { "country": "Italy", "gold": 12, "silver": 13, "bronze": 15, "total": 40 },
    { "country": "Netherlands", "gold": 15, "silver": 7, "bronze": 12, "total": 34 },
    { "country": "Germany", "gold": 12, "silver": 13, "bronze": 8, "total": 33 },
    { "country": "South Korea", "gold": 13, "silver": 9, "bronze": 10, "total": 32 },
    { "country": "Canada", "gold": 9, "silver": 7, "bronze": 11, "total": 27 },
    { "country": "New Zealand", "gold": 10, "silver": 7, "bronze": 3, "total": 20 },
    { "country": "Brazil", "gold": 3, "silver": 7, "bronze": 10, "total": 20 },
    { "country": "Hungary", "gold": 6, "silver": 7, "bronze": 6, "total": 19 },
    { "country": "Spain", "gold": 5, "silver": 4, "bronze": 9, "total": 18 },
    { "country": "Uzbekistan", "gold": 8, "silver": 2, "bronze": 3, "total": 13 },
    { "country": "Iran", "gold": 3, "silver": 6, "bronze": 3, "total": 12 },
    { "country": "Ukraine", "gold": 3, "silver": 5, "bronze": 4, "total": 12 },
    { "country": "Sweden", "gold": 4, "silver": 4, "bronze": 3, "total": 11 },
    { "country": "Kenya", "gold": 4, "silver": 2, "bronze": 5, "total": 11 },
    { "country": "Belgium", "gold": 3, "silver": 1, "bronze": 6, "total": 10 },
    { "country": "Poland", "gold": 1, "silver": 4, "bronze": 5, "total": 10 },
    { "country": "Romania", "gold": 3, "silver": 4, "bronze": 2, "total": 9 },
    { "country": "Denmark", "gold": 2, "silver": 2, "bronze": 5, "total": 9 },
    { "country": "Norway", "gold": 4, "silver": 2, "bronze": 2, "total": 8 },
    { "country": "Turkey", "gold": 2, "silver": 3, "bronze": 3, "total": 8 },
    { "country": "Thailand", "gold": 3, "silver": 1, "bronze": 3, "total": 7 },
    { "country": "Kazakhstan", "gold": 2, "silver": 2, "bronze": 3, "total": 7 },
    { "country": "Czech Republic", "gold": 1, "silver": 3, "bronze": 3, "total": 7 },
    { "country": "Switzerland", "gold": 2, "silver": 2, "bronze": 2, "total": 6 },
    { "country": "Indonesia", "gold": 1, "silver": 3, "bronze": 2, "total": 6 },
    { "country": "Serbia", "gold": 2, "silver": 1, "bronze": 3, "total": 6 },
    { "country": "Ethiopia", "gold": 2, "silver": 2, "bronze": 1, "total": 5 },
    { "country": "Slovakia", "gold": 1, "silver": 2, "bronze": 2, "total": 5 },
    { "country": "Georgia", "gold": 2, "silver": 0, "bronze": 3, "total": 5 },
    { "country": "Croatia", "gold": 1, "silver": 2, "bronze": 2, "total": 5 },
    { "country": "Austria", "gold": 2, "silver": 1, "bronze": 1, "total": 4 },
    { "country": "Vietnam", "gold": 1, "silver": 2, "bronze": 1, "total": 4 },
    { "country": "Slovenia", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "Bulgaria", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "North Korea", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "Ireland", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "Colombia", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "Finland", "gold": 1, "silver": 0, "bronze": 2, "total": 3 },
    { "country": "Mexico", "gold": 1, "silver": 0, "bronze": 2, "total": 3 },
    { "country": "Portugal", "gold": 1, "silver": 0, "bronze": 2, "total": 3 },
    { "country": "Greece", "gold": 0, "silver": 2, "bronze": 1, "total": 3 },
    { "country": "Algeria", "gold": 1, "silver": 1, "bronze": 0, "total": 2 },
    { "country": "Armenia", "gold": 1, "silver": 1, "bronze": 0, "total": 2 },
    { "country": "Dominican Republic", "gold": 1, "silver": 0, "bronze": 1, "total": 2 },
    { "country": "Mongolia", "gold": 1, "silver": 0, "bronze": 1, "total": 2 },
    { "country": "Estonia", "gold": 1, "silver": 0, "bronze": 1, "total": 2 },
    { "country": "Israel", "gold": 0, "silver": 2, "bronze": 0, "total": 2 },
    { "country": "India", "gold": 0, "silver": 1, "bronze": 5, "total": 6 },
    { "country": "Latvia", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Hong Kong", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Malaysia", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Nigeria", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Venezuela", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Lithuania", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Saudi Arabia", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Tunisia", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Ecuador", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Sri Lanka", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Bahrain", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Morocco", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Philippines", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Qatar", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Botswana", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Kuwait", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Namibia", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Cyprus", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Trinidad and Tobago", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Azerbaijan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Barbados", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Fiji", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Ghana", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Grenada", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Kyrgyzstan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Moldova", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Tajikistan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Turkmenistan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Uganda", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Uruguay", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Zambia", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Panama", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Sudan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Paraguay", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Cameroon", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Niger", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Ivory Coast", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Democratic Republic of the Congo", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Honduras", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Afghanistan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Albania", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Algeria", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "American Samoa", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Andorra", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Angola", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Antigua and Barbuda", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Armenia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Aruba", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Brunei", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cambodia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cameroon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cape Verde", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Central African Republic", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Chad", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Comoros", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cook Islands", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Costa Rica", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cuba", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Congo (Republic)", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Djibouti", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Dominica", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "El Salvador", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Equatorial Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Eritrea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Eswatini", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Gabon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Gambia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guinea-Bissau", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guyana", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Haiti", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Iceland", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Iraq", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Kosovo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Laos", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Lebanon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Lesotho", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Liberia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Libya", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Liechtenstein", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Luxembourg", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Maldives", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mali", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Malta", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mauritania", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mozambique", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Myanmar", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nauru", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nepal", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nicaragua", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Oman", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Palau", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Palestine", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Papua New Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Peru", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Puerto Rico", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Republic of the Congo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Rwanda", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Kitts and Nevis", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Lucia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Vincent and the Grenadines", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Samoa", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "San Marino", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "São Tomé and Príncipe", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Senegal", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Seychelles", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Sierra Leone", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Singapore", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Solomon Islands", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Somalia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "South Sudan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Suriname", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Syria", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Timor-Leste", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Togo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tonga", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tuvalu", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "United Arab Emirates", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Vanuatu", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Virgin Islands (US)", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Virgin Islands (British)", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Yemen", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Zimbabwe", "gold": 0, "silver": 0, "bronze": 0, "total": 0 }


];

const year2020 = [

    { "country": "United States", "gold": 39, "silver": 41, "bronze": 33, "total": 113 },
    { "country": "China", "gold": 38, "silver": 32, "bronze": 18, "total": 88 },
    { "country": "Japan", "gold": 27, "silver": 14, "bronze": 17, "total": 58 },
    { "country": "Great Britain", "gold": 22, "silver": 21, "bronze": 22, "total": 65 },
    { "country": "ROC", "gold": 20, "silver": 28, "bronze": 23, "total": 71 },
    { "country": "Australia", "gold": 17, "silver": 7, "bronze": 22, "total": 46 },
    { "country": "Netherlands", "gold": 10, "silver": 12, "bronze": 14, "total": 36 },
    { "country": "France", "gold": 10, "silver": 12, "bronze": 11, "total": 33 },
    { "country": "Germany", "gold": 10, "silver": 11, "bronze": 16, "total": 37 },
    { "country": "Italy", "gold": 10, "silver": 10, "bronze": 20, "total": 40 },
    { "country": "Canada", "gold": 7, "silver": 6, "bronze": 11, "total": 24 },
    { "country": "Brazil", "gold": 7, "silver": 6, "bronze": 8, "total": 21 },
    { "country": "New Zealand", "gold": 7, "silver": 6, "bronze": 7, "total": 20 },
    { "country": "Cuba", "gold": 7, "silver": 3, "bronze": 5, "total": 15 },
    { "country": "Hungary", "gold": 6, "silver": 7, "bronze": 7, "total": 20 },
    { "country": "South Korea", "gold": 6, "silver": 4, "bronze": 10, "total": 20 },
    { "country": "Poland", "gold": 4, "silver": 5, "bronze": 5, "total": 14 },
    { "country": "Czech Republic", "gold": 4, "silver": 4, "bronze": 3, "total": 11 },
    { "country": "Kenya", "gold": 4, "silver": 4, "bronze": 2, "total": 10 },
    { "country": "Norway", "gold": 4, "silver": 2, "bronze": 2, "total": 8 },
    { "country": "Jamaica", "gold": 4, "silver": 1, "bronze": 4, "total": 9 },
    { "country": "Spain", "gold": 3, "silver": 8, "bronze": 6, "total": 17 },
    { "country": "Sweden", "gold": 3, "silver": 6, "bronze": 0, "total": 9 },
    { "country": "Switzerland", "gold": 3, "silver": 4, "bronze": 6, "total": 13 },
    { "country": "Denmark", "gold": 3, "silver": 4, "bronze": 4, "total": 11 },
    { "country": "Croatia", "gold": 3, "silver": 3, "bronze": 2, "total": 8 },
    { "country": "Iran", "gold": 3, "silver": 2, "bronze": 2, "total": 7 },
    { "country": "Serbia", "gold": 3, "silver": 1, "bronze": 5, "total": 9 },
    { "country": "Belgium", "gold": 3, "silver": 1, "bronze": 3, "total": 7 },
    { "country": "Bulgaria", "gold": 3, "silver": 1, "bronze": 2, "total": 6 },
    { "country": "Slovenia", "gold": 3, "silver": 1, "bronze": 1, "total": 5 },
    { "country": "Uzbekistan", "gold": 3, "silver": 0, "bronze": 2, "total": 5 },
    { "country": "Georgia", "gold": 2, "silver": 5, "bronze": 1, "total": 8 },
    { "country": "Chinese Taipei", "gold": 2, "silver": 4, "bronze": 6, "total": 12 },
    { "country": "Turkey", "gold": 2, "silver": 2, "bronze": 9, "total": 13 },
    { "country": "Greece", "gold": 2, "silver": 1, "bronze": 1, "total": 4 },
    { "country": "Uganda", "gold": 2, "silver": 1, "bronze": 1, "total": 4 },
    { "country": "Ecuador", "gold": 2, "silver": 1, "bronze": 0, "total": 3 },
    { "country": "Ireland", "gold": 2, "silver": 0, "bronze": 2, "total": 4 },
    { "country": "Israel", "gold": 2, "silver": 0, "bronze": 2, "total": 4 },
    { "country": "Qatar", "gold": 2, "silver": 0, "bronze": 1, "total": 3 },
    { "country": "Bahamas", "gold": 2, "silver": 0, "bronze": 0, "total": 2 },
    { "country": "Kosovo", "gold": 2, "silver": 0, "bronze": 0, "total": 2 },
    { "country": "Ukraine", "gold": 1, "silver": 6, "bronze": 12, "total": 19 },
    { "country": "South Africa", "gold": 1, "silver": 2, "bronze": 0, "total": 3 },
    { "country": "Hong Kong", "gold": 1, "silver": 2, "bronze": 3, "total": 6 },
    { "country": "Philippines", "gold": 1, "silver": 2, "bronze": 1, "total": 4 },
    { "country": "Slovakia", "gold": 1, "silver": 2, "bronze": 1, "total": 4 },
    { "country": "Austria", "gold": 1, "silver": 1, "bronze": 5, "total": 7 },
    { "country": "India", "gold": 1, "silver": 2, "bronze": 4, "total": 7 },
    { "country": "Thailand", "gold": 1, "silver": 0, "bronze": 1, "total": 2 },
    { "country": "Latvia", "gold": 1, "silver": 0, "bronze": 1, "total": 2 },
    { "country": "Puerto Rico", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Tunisia", "gold": 1, "silver": 0, "bronze": 0, "total": 1 },
    { "country": "Estonia", "gold": 0, "silver": 2, "bronze": 1, "total": 3 },
    { "country": "Fiji", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Portugal", "gold": 0, "silver": 1, "bronze": 3, "total": 4 },
    { "country": "Indonesia", "gold": 1, "silver": 1, "bronze": 3, "total": 5 },
    { "country": "Nigeria", "gold": 1, "silver": 1, "bronze": 0, "total": 2 },
    { "country": "San Marino", "gold": 0, "silver": 1, "bronze": 2, "total": 3 },
    { "country": "Jordan", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Malaysia", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Bahrain", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Saudi Arabia", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Lithuania", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "North Macedonia", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Mongolia", "gold": 0, "silver": 1, "bronze": 3, "total": 4 },
    { "country": "Colombia", "gold": 0, "silver": 4, "bronze": 1, "total": 5 },
    { "country": "Azerbaijan", "gold": 0, "silver": 3, "bronze": 4, "total": 7 },
    { "country": "Kazakhstan", "gold": 0, "silver": 0, "bronze": 8, "total": 8 },
    { "country": "Egypt", "gold": 0, "silver": 1, "bronze": 4, "total": 5 },
    { "country": "Vietnam", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Dominican Republic", "gold": 0, "silver": 3, "bronze": 2, "total": 5 },
    { "country": "Venezuela", "gold": 0, "silver": 1, "bronze": 3, "total": 4 },
    { "country": "Ivory Coast", "gold": 0, "silver": 1, "bronze": 1, "total": 2 },
    { "country": "Kuwait", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Morocco", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Botswana", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Burkina Faso", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Grenada", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Kuwait", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Republic of Moldova", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Namibia", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Turkmenistan", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Uzbekistan", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Syria", "gold": 0, "silver": 0, "bronze": 1, "total": 1 },
    { "country": "Burundi", "gold": 0, "silver": 1, "bronze": 0, "total": 1 },
    { "country": "Ethiopia", "gold": 1, "silver": 1, "bronze": 2, "total": 4 },
    { "country": "Armenia", "gold": 0, "silver": 2, "bronze": 2, "total": 4 },
    { "country": "Belarus", "gold": 1, "silver": 3, "bronze": 3, "total": 7 },
    { "country": "Romania", "gold": 1, "silver": 3, "bronze": 0, "total": 4 },
    { "country": "Pakistan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Afghanistan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Albania", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "American Samoa", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Andorra", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Angola", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Antigua and Barbuda", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Aruba", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Bahamas", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Bangladesh", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Barbados", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Belize", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Benin", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Bhutan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Bolivia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Bosnia and Herzegovina", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Brunei", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Burkina Faso", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Burundi", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cambodia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cameroon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cape Verde", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Central African Republic", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Chad", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Comoros", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Congo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Cook Islands", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Costa Rica", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Djibouti", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Dominica", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "El Salvador", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Equatorial Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Eritrea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Eswatini", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Federated States of Micronesia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Gabon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Gambia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guam", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guatemala", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guinea-Bissau", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Guyana", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Haiti", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Honduras", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Iceland", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Iraq", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Kyrgyzstan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Laos", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Lebanon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Lesotho", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Liberia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Libya", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Liechtenstein", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Madagascar", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Malawi", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Maldives", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mali", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Malta", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Marshall Islands", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mauritania", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mauritius", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Monaco", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Mozambique", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Myanmar", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nepal", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nicaragua", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Niger", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "North Korea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Oman", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Palau", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Palestine", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Panama", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Papua New Guinea", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Paraguay", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Qatar", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Rwanda", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Kitts and Nevis", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Lucia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Vincent and the Grenadines", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Samoa", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Sao Tome and Principe", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Senegal", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Seychelles", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Sierra Leone", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Solomon Islands", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Somalia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "South Sudan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Sri Lanka", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Sudan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Suriname", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tajikistan", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tanzania", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Togo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tonga", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Trinidad and Tobago", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tunisia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Tuvalu", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Uganda", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Vanuatu", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Yemen", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Zambia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Zimbabwe", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Kosovo", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Montenegro", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "San Marino", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "South Yemen", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Serbia and Montenegro", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "North Macedonia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "New Caledonia", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Timor-Leste", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Nauru", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Saint Pierre and Miquelon", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Reunion", "gold": 0, "silver": 0, "bronze": 0, "total": 0 },
    { "country": "Martinique", "gold": 0, "silver": 0, "bronze": 0, "total": 0 }
];

const year2016 = [
    {
        "country": "United States",
        "gold": 46,
        "silver": 37,
        "bronze": 38,
        "total": 121
    },
    {
        "country": "Great Britain",
        "gold": 27,
        "silver": 23,
        "bronze": 17,
        "total": 67
    },
    {
        "country": "China",
        "gold": 26,
        "silver": 18,
        "bronze": 26,
        "total": 70
    },
    {
        "country": "Russia",
        "gold": 19,
        "silver": 18,
        "bronze": 19,
        "total": 56
    },
    {
        "country": "Germany",
        "gold": 17,
        "silver": 10,
        "bronze": 15,
        "total": 42
    },
    {
        "country": "Japan",
        "gold": 12,
        "silver": 8,
        "bronze": 21,
        "total": 41
    },
    {
        "country": "France",
        "gold": 10,
        "silver": 18,
        "bronze": 14,
        "total": 42
    },
    {
        "country": "South Korea",
        "gold": 9,
        "silver": 3,
        "bronze": 9,
        "total": 21
    },
    {
        "country": "Italy",
        "gold": 8,
        "silver": 12,
        "bronze": 8,
        "total": 28
    },
    {
        "country": "Australia",
        "gold": 8,
        "silver": 11,
        "bronze": 10,
        "total": 29
    },
    {
        "country": "Netherlands",
        "gold": 8,
        "silver": 7,
        "bronze": 4,
        "total": 19
    },
    {
        "country": "Hungary",
        "gold": 8,
        "silver": 3,
        "bronze": 4,
        "total": 15
    },
    {
        "country": "Brazil",
        "gold": 7,
        "silver": 6,
        "bronze": 6,
        "total": 19
    },
    {
        "country": "Spain",
        "gold": 7,
        "silver": 4,
        "bronze": 6,
        "total": 17
    },
    {
        "country": "Kenya",
        "gold": 6,
        "silver": 6,
        "bronze": 1,
        "total": 13
    },
    {
        "country": "Jamaica",
        "gold": 6,
        "silver": 3,
        "bronze": 2,
        "total": 11
    },
    {
        "country": "Croatia",
        "gold": 5,
        "silver": 3,
        "bronze": 2,
        "total": 10
    },
    {
        "country": "Cuba",
        "gold": 5,
        "silver": 2,
        "bronze": 4,
        "total": 11
    },
    {
        "country": "New Zealand",
        "gold": 4,
        "silver": 9,
        "bronze": 5,
        "total": 18
    },
    {
        "country": "Canada",
        "gold": 4,
        "silver": 3,
        "bronze": 15,
        "total": 22
    },
    {
        "country": "Uzbekistan",
        "gold": 4,
        "silver": 2,
        "bronze": 7,
        "total": 13
    },
    {
        "country": "Kazakhstan",
        "gold": 3,
        "silver": 5,
        "bronze": 10,
        "total": 18
    },
    {
        "country": "Colombia",
        "gold": 3,
        "silver": 2,
        "bronze": 3,
        "total": 8
    },
    {
        "country": "Switzerland",
        "gold": 3,
        "silver": 2,
        "bronze": 2,
        "total": 7
    },
    {
        "country": "Iran",
        "gold": 3,
        "silver": 1,
        "bronze": 4,
        "total": 8
    },
    {
        "country": "Greece",
        "gold": 3,
        "silver": 1,
        "bronze": 2,
        "total": 6
    },
    {
        "country": "Argentina",
        "gold": 3,
        "silver": 1,
        "bronze": 0,
        "total": 4
    },
    {
        "country": "Denmark",
        "gold": 2,
        "silver": 6,
        "bronze": 7,
        "total": 15
    },
    {
        "country": "Sweden",
        "gold": 2,
        "silver": 6,
        "bronze": 3,
        "total": 11
    },
    {
        "country": "South Africa",
        "gold": 2,
        "silver": 6,
        "bronze": 2,
        "total": 10
    },
    {
        "country": "Ukraine",
        "gold": 2,
        "silver": 5,
        "bronze": 4,
        "total": 11
    },
    {
        "country": "Serbia",
        "gold": 2,
        "silver": 4,
        "bronze": 2,
        "total": 8
    },
    {
        "country": "Poland",
        "gold": 2,
        "silver": 3,
        "bronze": 6,
        "total": 11
    },
    {
        "country": "North Korea",
        "gold": 2,
        "silver": 3,
        "bronze": 2,
        "total": 7
    },
    {
        "country": "Belgium",
        "gold": 2,
        "silver": 2,
        "bronze": 2,
        "total": 6
    },
    {
        "country": "Thailand",
        "gold": 2,
        "silver": 2,
        "bronze": 2,
        "total": 6
    },
    {
        "country": "Slovakia",
        "gold": 2,
        "silver": 2,
        "bronze": 0,
        "total": 4
    },
    {
        "country": "Georgia",
        "gold": 2,
        "silver": 1,
        "bronze": 4,
        "total": 7
    },
    {
        "country": "Azerbaijan",
        "gold": 1,
        "silver": 7,
        "bronze": 10,
        "total": 18
    },
    {
        "country": "Belarus",
        "gold": 1,
        "silver": 4,
        "bronze": 4,
        "total": 9
    },
    {
        "country": "Turkey",
        "gold": 1,
        "silver": 3,
        "bronze": 4,
        "total": 8
    },
    {
        "country": "Armenia",
        "gold": 1,
        "silver": 3,
        "bronze": 0,
        "total": 4
    },
    {
        "country": "Czech Republic",
        "gold": 1,
        "silver": 2,
        "bronze": 7,
        "total": 10
    },
    {
        "country": "Ethiopia",
        "gold": 1,
        "silver": 2,
        "bronze": 5,
        "total": 8
    },
    {
        "country": "Slovenia",
        "gold": 1,
        "silver": 2,
        "bronze": 1,
        "total": 4
    },
    {
        "country": "Indonesia",
        "gold": 1,
        "silver": 2,
        "bronze": 0,
        "total": 3
    },
    {
        "country": "Romania",
        "gold": 1,
        "silver": 1,
        "bronze": 3,
        "total": 5
    },
    {
        "country": "Bahrain",
        "gold": 1,
        "silver": 1,
        "bronze": 0,
        "total": 2
    },
    {
        "country": "Vietnam",
        "gold": 1,
        "silver": 1,
        "bronze": 0,
        "total": 2
    },
    {
        "country": "Chinese Taipei",
        "gold": 1,
        "silver": 0,
        "bronze": 2,
        "total": 3
    },
    {
        "country": "Bahamas",
        "gold": 1,
        "silver": 0,
        "bronze": 1,
        "total": 2
    },
    {
        "country": "Ivory Coast",
        "gold": 1,
        "silver": 0,
        "bronze": 1,
        "total": 2
    },
    {
        "country": "Independent Olympic Athletes",
        "gold": 1,
        "silver": 0,
        "bronze": 1,
        "total": 2
    },
    {
        "country": "Fiji",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Jordan",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Kosovo",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Puerto Rico",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Singapore",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Tajikistan",
        "gold": 1,
        "silver": 0,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Malaysia",
        "gold": 0,
        "silver": 4,
        "bronze": 1,
        "total": 5
    },
    {
        "country": "Mexico",
        "gold": 0,
        "silver": 3,
        "bronze": 2,
        "total": 5
    },
    {
        "country": "Algeria",
        "gold": 0,
        "silver": 2,
        "bronze": 0,
        "total": 2
    },
    {
        "country": "Ireland",
        "gold": 0,
        "silver": 2,
        "bronze": 0,
        "total": 2
    },
    {
        "country": "Lithuania",
        "gold": 0,
        "silver": 1,
        "bronze": 3,
        "total": 4
    },
    {
        "country": "Bulgaria",
        "gold": 0,
        "silver": 1,
        "bronze": 2,
        "total": 3
    },
    {
        "country": "Venezuela",
        "gold": 0,
        "silver": 1,
        "bronze": 2,
        "total": 3
    },
    {
        "country": "India",
        "gold": 0,
        "silver": 1,
        "bronze": 1,
        "total": 2
    },
    {
        "country": "Mongolia",
        "gold": 0,
        "silver": 1,
        "bronze": 1,
        "total": 2
    },
    {
        "country": "Burundi",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Grenada",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Niger",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Philippines",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Qatar",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Tunisia",
        "gold": 0,
        "silver": 1,
        "bronze": 0,
        "total": 1
    },
    {
        "country": "Egypt",
        "gold": 0,
        "silver": 0,
        "bronze": 3,
        "total": 3
    },
    {
        "country": "Estonia",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "Israel",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "Nigeria",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "Portugal",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "Trinidad and Tobago",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "United Arab Emirates",
        "gold": 0,
        "silver": 0,
        "bronze": 1,
        "total": 1
    },
    {
        "country": "Afghanistan",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Andorra",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Antigua and Barbuda",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Aruba",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Barbados",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Belize",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Benin",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Bermuda",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Bhutan",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Bolivia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Botswana",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "British Virgin Islands",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Burkina Faso",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Cambodia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Cape Verde",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Cayman Islands",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Central African Republic",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Chad",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Comoros",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Congo",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Cook Islands",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Cyprus",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Djibouti",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Dominica",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "El Salvador",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Equatorial Guinea",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Eritrea",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Gabon",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Gambia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Guam",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Guatemala",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Guinea",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Guinea-Bissau",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Guyana",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Haiti",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Honduras",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Iceland",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Iraq",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Kiribati",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Laos",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Lebanon",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Lesotho",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Liberia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Libya",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Liechtenstein",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Luxembourg",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Macedonia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Madagascar",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Malawi",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Maldives",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Mali",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Malta",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Marshall Islands",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Mauritania",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Mauritius",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Micronesia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Monaco",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Montenegro",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Myanmar",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Namibia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Nauru",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Nepal",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Nicaragua",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Oman",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Palau",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Palestine",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Panama",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Papua New Guinea",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Rwanda",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Saint Kitts and Nevis",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Saint Lucia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Saint Vincent and the Grenadines",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Samoa",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "San Marino",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Sao Tome and Principe",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Senegal",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Seychelles",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Sierra Leone",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Solomon Islands",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Somalia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "South Sudan",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Sudan",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Suriname",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Swaziland",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Syria",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Tanzania",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Timor-Leste",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Togo",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Tonga",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Turkmenistan",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Tuvalu",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Uganda",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Vanuatu",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Yemen",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Zambia",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    },
    {
        "country": "Zimbabwe",
        "gold": 0,
        "silver": 0,
        "bronze": 0,
        "total": 0
    }
];

const year2012 = [
  {
    "country": "United States",
    "gold": 46,
    "silver": 29,
    "bronze": 29,
    "total": 104
  },
  {
    "country": "China",
    "gold": 38,
    "silver": 27,
    "bronze": 23,
    "total": 88
  },
  {
    "country": "Great Britain",
    "gold": 29,
    "silver": 17,
    "bronze": 19,
    "total": 65
  },
  {
    "country": "Russia",
    "gold": 24,
    "silver": 26,
    "bronze": 32,
    "total": 82
  },
  {
    "country": "South Korea",
    "gold": 13,
    "silver": 8,
    "bronze": 7,
    "total": 28
  },
  {
    "country": "Germany",
    "gold": 11,
    "silver": 19,
    "bronze": 14,
    "total": 44
  },
  {
    "country": "France",
    "gold": 11,
    "silver": 11,
    "bronze": 12,
    "total": 34
  },
  {
    "country": "Italy",
    "gold": 8,
    "silver": 9,
    "bronze": 11,
    "total": 28
  },
  {
    "country": "Hungary",
    "gold": 8,
    "silver": 4,
    "bronze": 6,
    "total": 18
  },
  {
    "country": "Australia",
    "gold": 7,
    "silver": 16,
    "bronze": 12,
    "total": 35
  },
  {
    "country": "Japan",
    "gold": 7,
    "silver": 14,
    "bronze": 17,
    "total": 38
  },
  {
    "country": "Kazakhstan",
    "gold": 7,
    "silver": 1,
    "bronze": 5,
    "total": 13
  },
  {
    "country": "Netherlands",
    "gold": 6,
    "silver": 6,
    "bronze": 8,
    "total": 20
  },
  {
    "country": "Ukraine",
    "gold": 6,
    "silver": 5,
    "bronze": 9,
    "total": 20
  },
  {
    "country": "New Zealand",
    "gold": 6,
    "silver": 2,
    "bronze": 5,
    "total": 13
  },
  {
    "country": "Cuba",
    "gold": 5,
    "silver": 3,
    "bronze": 6,
    "total": 14
  },
  {
    "country": "Iran",
    "gold": 5,
    "silver": 3,
    "bronze": 2,
    "total": 10
  },
  {
    "country": "Jamaica",
    "gold": 4,
    "silver": 5,
    "bronze": 3,
    "total": 12
  },
  {
    "country": "Czech Republic",
    "gold": 4,
    "silver": 4,
    "bronze": 4,
    "total": 12
  },
  {
    "country": "North Korea",
    "gold": 4,
    "silver": 0,
    "bronze": 3,
    "total": 7
  },
  {
    "country": "Spain",
    "gold": 3,
    "silver": 10,
    "bronze": 4,
    "total": 17
  },
  {
    "country": "Brazil",
    "gold": 3,
    "silver": 5,
    "bronze": 9,
    "total": 17
  },
  {
    "country": "South Africa",
    "gold": 3,
    "silver": 2,
    "bronze": 1,
    "total": 6
  },
  {
    "country": "Ethiopia",
    "gold": 3,
    "silver": 1,
    "bronze": 3,
    "total": 7
  },
  {
    "country": "Croatia",
    "gold": 3,
    "silver": 1,
    "bronze": 2,
    "total": 6
  },
  {
    "country": "Belarus",
    "gold": 2,
    "silver": 5,
    "bronze": 5,
    "total": 12
  },
  {
    "country": "Romania",
    "gold": 2,
    "silver": 5,
    "bronze": 2,
    "total": 9
  },
  {
    "country": "Kenya",
    "gold": 2,
    "silver": 4,
    "bronze": 5,
    "total": 11
  },
  {
    "country": "Denmark",
    "gold": 2,
    "silver": 4,
    "bronze": 3,
    "total": 9
  },
  {
    "country": "Azerbaijan",
    "gold": 2,
    "silver": 2,
    "bronze": 6,
    "total": 10
  },
  {
    "country": "Poland",
    "gold": 2,
    "silver": 2,
    "bronze": 6,
    "total": 10
  },
  {
    "country": "Turkey",
    "gold": 2,
    "silver": 2,
    "bronze": 1,
    "total": 5
  },
  {
    "country": "Switzerland",
    "gold": 2,
    "silver": 2,
    "bronze": 0,
    "total": 4
  },
  {
    "country": "Lithuania",
    "gold": 2,
    "silver": 1,
    "bronze": 2,
    "total": 5
  },
  {
    "country": "Norway",
    "gold": 2,
    "silver": 1,
    "bronze": 1,
    "total": 4
  },
  {
    "country": "Canada",
    "gold": 1,
    "silver": 5,
    "bronze": 12,
    "total": 18
  },
  {
    "country": "Sweden",
    "gold": 1,
    "silver": 4,
    "bronze": 3,
    "total": 8
  },
  {
    "country": "Colombia",
    "gold": 1,
    "silver": 3,
    "bronze": 4,
    "total": 8
  },
  {
    "country": "Georgia",
    "gold": 1,
    "silver": 3,
    "bronze": 3,
    "total": 7
  },
  {
    "country": "Mexico",
    "gold": 1,
    "silver": 3,
    "bronze": 3,
    "total": 7
  },
  {
    "country": "Ireland",
    "gold": 1,
    "silver": 1,
    "bronze": 4,
    "total": 6
  },
  {
    "country": "Argentina",
    "gold": 1,
    "silver": 1,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Slovenia",
    "gold": 1,
    "silver": 1,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Serbia",
    "gold": 1,
    "silver": 1,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Tunisia",
    "gold": 1,
    "silver": 1,
    "bronze": 1,
    "total": 3
  },
  {
    "country": "Dominican Republic",
    "gold": 1,
    "silver": 1,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "Trinidad and Tobago",
    "gold": 1,
    "silver": 1,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Latvia",
    "gold": 1,
    "silver": 0,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Grenada",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Bahamas",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Uganda",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Venezuela",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Algeria",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "India",
    "gold": 0,
    "silver": 2,
    "bronze": 4,
    "total": 6
  },
  {
    "country": "Mongolia",
    "gold": 0,
    "silver": 2,
    "bronze": 3,
    "total": 5
  },
  {
    "country": "Thailand",
    "gold": 0,
    "silver": 2,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Egypt",
    "gold": 0,
    "silver": 2,
    "bronze": 1,
    "total": 3
  },
  {
    "country": "Slovakia",
    "gold": 0,
    "silver": 1,
    "bronze": 3,
    "total": 4
  },
  {
    "country": "Belgium",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Finland",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Armenia",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Bulgaria",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Estonia",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Indonesia",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Malaysia",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Puerto Rico",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Chinese Taipei",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Botswana",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Cyprus",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Gabon",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Guatemala",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Montenegro",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Portugal",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Greece",
    "gold": 0,
    "silver": 0,
    "bronze": 2,
    "total": 2
  },
  {
    "country": "Moldova",
    "gold": 0,
    "silver": 0,
    "bronze": 2,
    "total": 2
  },
  {
    "country": "Qatar",
    "gold": 0,
    "silver": 0,
    "bronze": 2,
    "total": 2
  },
  {
    "country": "Singapore",
    "gold": 0,
    "silver": 0,
    "bronze": 2,
    "total": 2
  },
  {
    "country": "Afghanistan",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Bahrain",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Hong Kong",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Saudi Arabia",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Kuwait",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Morocco",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Tajikistan",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Andorra",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Angola",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Antigua and Barbuda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Aruba",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Barbados",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Belize",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Benin",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bermuda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bhutan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bolivia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bosnia and Herzegovina",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "British Virgin Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Burkina Faso",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Burundi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cambodia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cape Verde",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cayman Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Central African Republic",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Chad",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Comoros",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Congo",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cook Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Djibouti",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Dominica",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "El Salvador",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Equatorial Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Eritrea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Fiji",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Gambia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guam",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guinea-Bissau",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guyana",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Haiti",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Honduras",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Iceland",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Iraq",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Kiribati",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Laos",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Lebanon",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Lesotho",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Liberia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Libya",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Liechtenstein",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Luxembourg",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Madagascar",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Malawi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Maldives",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Mali",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Malta",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Marshall Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Mauritania",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Mauritius",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Micronesia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Monaco",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Myanmar",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Namibia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nauru",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nepal",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nicaragua",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Oman",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Palau",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Palestine",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Panama",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Papua New Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Rwanda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Kitts and Nevis",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Lucia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Samoa",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "San Marino",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Sao Tome and Principe",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Senegal",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Seychelles",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Sierra Leone",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Solomon Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Somalia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Sudan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Suriname",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Swaziland",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Syria",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tanzania",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Timor-Leste",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Togo",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tonga",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Turkmenistan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tuvalu",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Vanuatu",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Yemen",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Zambia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Zimbabwe",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  }
];

const year2008 = [
  {
    "country": "China",
    "gold": 51,
    "silver": 21,
    "bronze": 28,
    "total": 100
  },
  {
    "country": "United States",
    "gold": 36,
    "silver": 38,
    "bronze": 36,
    "total": 110
  },
  {
    "country": "Russia",
    "gold": 23,
    "silver": 21,
    "bronze": 28,
    "total": 72
  },
  {
    "country": "Great Britain",
    "gold": 19,
    "silver": 13,
    "bronze": 15,
    "total": 47
  },
  {
    "country": "Germany",
    "gold": 16,
    "silver": 10,
    "bronze": 15,
    "total": 41
  },
  {
    "country": "Australia",
    "gold": 14,
    "silver": 15,
    "bronze": 17,
    "total": 46
  },
  {
    "country": "South Korea",
    "gold": 13,
    "silver": 10,
    "bronze": 8,
    "total": 31
  },
  {
    "country": "Japan",
    "gold": 9,
    "silver": 6,
    "bronze": 10,
    "total": 25
  },
  {
    "country": "Italy",
    "gold": 8,
    "silver": 10,
    "bronze": 10,
    "total": 28
  },
  {
    "country": "France",
    "gold": 7,
    "silver": 16,
    "bronze": 17,
    "total": 40
  },
  {
    "country": "Netherlands",
    "gold": 7,
    "silver": 5,
    "bronze": 4,
    "total": 16
  },
  {
    "country": "Ukraine",
    "gold": 7,
    "silver": 5,
    "bronze": 15,
    "total": 27
  },
  {
    "country": "Kenya",
    "gold": 6,
    "silver": 4,
    "bronze": 4,
    "total": 14
  },
  {
    "country": "Spain",
    "gold": 5,
    "silver": 10,
    "bronze": 3,
    "total": 18
  },
  {
    "country": "Jamaica",
    "gold": 5,
    "silver": 4,
    "bronze": 2,
    "total": 11
  },
  {
    "country": "Poland",
    "gold": 4,
    "silver": 5,
    "bronze": 2,
    "total": 11
  },
  {
    "country": "Ethiopia",
    "gold": 4,
    "silver": 1,
    "bronze": 2,
    "total": 7
  },
  {
    "country": "Romania",
    "gold": 4,
    "silver": 1,
    "bronze": 3,
    "total": 8
  },
  {
    "country": "Hungary",
    "gold": 3,
    "silver": 5,
    "bronze": 2,
    "total": 10
  },
  {
    "country": "Norway",
    "gold": 3,
    "silver": 5,
    "bronze": 1,
    "total": 9
  },
  {
    "country": "Brazil",
    "gold": 3,
    "silver": 4,
    "bronze": 8,
    "total": 15
  },
  {
    "country": "Belarus",
    "gold": 3,
    "silver": 4,
    "bronze": 7,
    "total": 14
  },
  {
    "country": "Cuba",
    "gold": 3,
    "silver": 4,
    "bronze": 6,
    "total": 13
  },
  {
    "country": "Canada",
    "gold": 3,
    "silver": 4,
    "bronze": 4,
    "total": 11
  },
  {
    "country": "Slovakia",
    "gold": 3,
    "silver": 3,
    "bronze": 0,
    "total": 6
  },
  {
    "country": "New Zealand",
    "gold": 3,
    "silver": 2,
    "bronze": 4,
    "total": 9
  },
  {
    "country": "Georgia",
    "gold": 3,
    "silver": 0,
    "bronze": 3,
    "total": 6
  },
  {
    "country": "Kazakhstan",
    "gold": 2,
    "silver": 3,
    "bronze": 4,
    "total": 9
  },
  {
    "country": "Denmark",
    "gold": 2,
    "silver": 2,
    "bronze": 3,
    "total": 7
  },
  {
    "country": "North Korea",
    "gold": 2,
    "silver": 2,
    "bronze": 2,
    "total": 6
  },
  {
    "country": "Thailand",
    "gold": 2,
    "silver": 2,
    "bronze": 0,
    "total": 4
  },
  {
    "country": "Mongolia",
    "gold": 2,
    "silver": 1,
    "bronze": 0,
    "total": 3
  },
  {
    "country": "Switzerland",
    "gold": 2,
    "silver": 1,
    "bronze": 4,
    "total": 7
  },
  {
    "country": "Argentina",
    "gold": 2,
    "silver": 0,
    "bronze": 4,
    "total": 6
  },
  {
    "country": "Mexico",
    "gold": 2,
    "silver": 0,
    "bronze": 1,
    "total": 3
  },
  {
    "country": "Turkey",
    "gold": 1,
    "silver": 4,
    "bronze": 3,
    "total": 8
  },
  {
    "country": "Zimbabwe",
    "gold": 1,
    "silver": 3,
    "bronze": 0,
    "total": 4
  },
  {
    "country": "Azerbaijan",
    "gold": 1,
    "silver": 2,
    "bronze": 4,
    "total": 7
  },
  {
    "country": "Czech Republic",
    "gold": 1,
    "silver": 2,
    "bronze": 3,
    "total": 6
  },
  {
    "country": "Slovenia",
    "gold": 1,
    "silver": 2,
    "bronze": 2,
    "total": 5
  },
  {
    "country": "Bulgaria",
    "gold": 1,
    "silver": 1,
    "bronze": 3,
    "total": 5
  },
  {
    "country": "Indonesia",
    "gold": 1,
    "silver": 1,
    "bronze": 3,
    "total": 5
  },
  {
    "country": "Finland",
    "gold": 1,
    "silver": 1,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Latvia",
    "gold": 1,
    "silver": 1,
    "bronze": 1,
    "total": 3
  },
  {
    "country": "Belgium",
    "gold": 1,
    "silver": 1,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "Dominican Republic",
    "gold": 1,
    "silver": 1,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "Estonia",
    "gold": 1,
    "silver": 1,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "Portugal",
    "gold": 1,
    "silver": 1,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "India",
    "gold": 1,
    "silver": 0,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Iran",
    "gold": 1,
    "silver": 0,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Cameroon",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Panama",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Tunisia",
    "gold": 1,
    "silver": 0,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Sweden",
    "gold": 0,
    "silver": 4,
    "bronze": 1,
    "total": 5
  },
  {
    "country": "Croatia",
    "gold": 0,
    "silver": 2,
    "bronze": 3,
    "total": 5
  },
  {
    "country": "Lithuania",
    "gold": 0,
    "silver": 2,
    "bronze": 3,
    "total": 5
  },
  {
    "country": "Greece",
    "gold": 0,
    "silver": 2,
    "bronze": 2,
    "total": 4
  },
  {
    "country": "Trinidad and Tobago",
    "gold": 0,
    "silver": 2,
    "bronze": 0,
    "total": 2
  },
  {
    "country": "Nigeria",
    "gold": 0,
    "silver": 1,
    "bronze": 3,
    "total": 4
  },
  {
    "country": "Serbia",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Austria",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Ireland",
    "gold": 0,
    "silver": 1,
    "bronze": 2,
    "total": 3
  },
  {
    "country": "Algeria",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Bahamas",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Colombia",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Kyrgyzstan",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Morocco",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Tajikistan",
    "gold": 0,
    "silver": 1,
    "bronze": 1,
    "total": 2
  },
  {
    "country": "Chile",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Ecuador",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Iceland",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Malaysia",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "South Africa",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Sudan",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Vietnam",
    "gold": 0,
    "silver": 1,
    "bronze": 0,
    "total": 1
  },
  {
    "country": "Armenia",
    "gold": 0,
    "silver": 0,
    "bronze": 6,
    "total": 6
  },
  {
    "country": "Chinese Taipei",
    "gold": 0,
    "silver": 0,
    "bronze": 4,
    "total": 4
  },
  {
    "country": "Afghanistan",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Egypt",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Israel",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Moldova",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Mauritius",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Togo",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Venezuela",
    "gold": 0,
    "silver": 0,
    "bronze": 1,
    "total": 1
  },
  {
    "country": "Andorra",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Angola",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Antigua and Barbuda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Aruba",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Barbados",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Belize",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Benin",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bermuda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bhutan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bolivia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Bosnia and Herzegovina",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "British Virgin Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Burkina Faso",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Burundi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cambodia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cape Verde",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cayman Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Central African Republic",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Chad",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Comoros",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Congo",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Cook Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Djibouti",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Dominica",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "El Salvador",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Equatorial Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Eritrea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Fiji",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Gambia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guam",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guatemala",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guinea-Bissau",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Guyana",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Haiti",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Honduras",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Iraq",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Kiribati",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Laos",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Lebanon",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Lesotho",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Liberia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Libya",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Liechtenstein",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Luxembourg",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Madagascar",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Malawi",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Maldives",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Mali",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Malta",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Marshall Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Mauritania",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Micronesia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Monaco",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Montenegro",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Myanmar",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Namibia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nauru",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nepal",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Nicaragua",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Oman",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Palau",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Palestine",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Papua New Guinea",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Rwanda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Kitts and Nevis",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Lucia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Saint Vincent and the Grenadines",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Samoa",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "San Marino",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Sao Tome and Principe",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Senegal",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Seychelles",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Sierra Leone",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Solomon Islands",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Somalia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Suriname",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Swaziland",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Syria",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tanzania",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Timor-Leste",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tonga",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Turkmenistan",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Tuvalu",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Uganda",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Vanuatu",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Yemen",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  },
  {
    "country": "Zambia",
    "gold": 0,
    "silver": 0,
    "bronze": 0,
    "total": 0
  }
];
let headings = [
    {
        "year": 2024,
        "head": "Paris Olympics 2024"
    },
    {
        "year": 2020,
        "head": "Tokyo Olympics 2020"
    },
    {
        "year": 2016,
        "head": "Rio Olympics 2016"
    },
    {
        "year": 2012,
        "head": "London Olympics 2012"
    },
    {
        "year": 2008,
        "head": "Beijing Olympics 2008"
    }
];
let year = document.getElementById("yearSelection");
let heading = document.getElementById("tableHead");
let tableBody = document.getElementById("tableBody");
let i = 1;
year2024.forEach(element => {
    if (element.total == 0) {
        i = 92;
    }
    tableBody.innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${element.country}</td>
                    <td>${element.gold}</td>
                    <td>${element.silver}</td>
                    <td>${element.bronze}</td>
                    <td>${element.total}</td>
                </tr>
            `;
    i = i + 1;
});
year.addEventListener("change", () => {
    let selected = parseInt(year.value);
    let actual = headings.find(h => h.year === selected);
    if (actual) {
        heading.innerText = actual.head;
        if (actual.year == 2024) {
            tableBody.innerHTML = "";
            let i = 1;
            year2024.forEach(element => {
                tableBody.innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${element.country}</td>
                    <td>${element.gold}</td>
                    <td>${element.silver}</td>
                    <td>${element.bronze}</td>
                    <td>${element.total}</td>
                </tr>
            `;
                i = i + 1;
            });
        }
        else if (actual.year == 2020) {
            let i = 1;
            tableBody.innerHTML = "";
            year2020.forEach(element => {
                tableBody.innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${element.country}</td>
                    <td>${element.gold}</td>
                    <td>${element.silver}</td>
                    <td>${element.bronze}</td>
                    <td>${element.total}</td>
                </tr>
            `;
                i = i + 1;
            });
        }
        else if (actual.year == 2016) {
            let i = 1;
            tableBody.innerHTML = "";
            year2016.forEach(element => {
                tableBody.innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${element.country}</td>
                    <td>${element.gold}</td>
                    <td>${element.silver}</td>
                    <td>${element.bronze}</td>
                    <td>${element.total}</td>
                </tr>
            `;
                i = i + 1;
            });
        }
        else if (actual.year == 2012) {
            let i = 1;
            tableBody.innerHTML = "";
            year2012.forEach(element => {
                tableBody.innerHTML += `
                <tr>
                    <td>${i}</td>
                    <td>${element.country}</td>
                    <td>${element.gold}</td>
                    <td>${element.silver}</td>
                    <td>${element.bronze}</td>
                    <td>${element.total}</td>
                </tr>
            `;
                i = i + 1;
            });
        }
    }
});

let update = document.getElementById("update1");
let entireContent = document.getElementById("entireDetails");
update.addEventListener("click",()=>{
  entireContent.classList.remove("hidden");
})