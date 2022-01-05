/**
 * Ranger les objets dans l'ordre soit croissant soit decroissant selon la propriété choisie soit la date soit autre
 */

Items = [{
      "ID": 95,
      "Subject": "• Yamoussoukro • Zouan-Hounien",
      "Date": 1637884800000,
      "Status": "PENDING",
      "CloseDate": 0,
      "Body": "",
      "Type": 1,
      "Author": "Admin",
      "Recipient": "SUPER MARCHE",
      "Reference": "A-21-0089",
      "ExternalReference": "marche 2020",
      "GroupId": 95,
      "CcRecipients": [],
      "Authorizations": ["usr_Admin", "srv_DRH"],
      "Attachments": ["word excel notions de base marchetti.doc"],
      "Deadlines": ["srv_DRH:1637280000000:1637884800000"],
      "Posts": []
  }, {
      "ID": 103,
      "Subject": "Indénié-Djuablin / Abengourou",
      "Date": 1637539200000,
      "Status": "PENDING",
      "CloseDate": 0,
      "Body": "",
      "Type": 1,
      "Author": "Admin",
      "Recipient": "VOLONTARISTE",
      "Reference": "A-21-0095",
      "ExternalReference": "vol 2000",
      "GroupId": 103,
      "CcRecipients": [],
      "Authorizations": ["usr_Admin", "srv_DAF"],
      "Attachments": ["letop.pdf"],
      "Deadlines": ["srv_DAF:1637539200000:1638144000000"],
      "Posts": []
  }, {
      "ID": 104,
      "Subject": "Sud-Comoé",
      "Date": 1637539200000,
      "Status": "PENDING",
      "CloseDate": 0,
      "Body": "",
      "Type": 1,
      "Author": "Admin",
      "Recipient": "EVANGILE TOTALE",
      "Reference": "A-21-0096",
      "ExternalReference": "evang 2000",
      "GroupId": 104,
      "CcRecipients": [],
      "Authorizations": ["usr_Admin", "srv_DT"],
      "Attachments": ["letop.pdf", "catalogue de prix 2.xls"],
      "Deadlines": ["srv_DT:1637539200000:1637884800000", "srv_DT:1637539200000:1637884800000"],
      "Posts": []
  }, {
      "ID": 105,
      "Subject": "Lôh-Djiboua",
      "Date": 1637539200000,
      "Status": "PENDING",
      "CloseDate": 0,
      "Body": "",
      "Type": 1,
      "Author": "Admin",
      "Recipient": "MINISTERE",
      "Reference": "A-21-0097",
      "ExternalReference": "min 2000",
      "GroupId": 105,
      "CcRecipients": [],
      "Authorizations": ["usr_Admin", "srv_DAF"],
      "Attachments": ["cat_simulation.xls", "catalogue de bnedt.xls"],
      "Deadlines": ["srv_DAF:1637539200000:1638144000000"],
      "Posts": []
  }, {
      "ID": 94,
      "Subject": "• Vavoua • Yakassé-Attobrou",
      "Date": 1637366400000,
      "Status": "PENDING",
      "CloseDate": 0,
      "Body": "",
      "Type": 1,
      "Author": "Admin",
      "Recipient": "SODECI-CIE",
      "Reference": "A-21-0088",
      "ExternalReference": "sodeci 2020",
      "GroupId": 95,
      "CcRecipients": [],
      "Authorizations": ["usr_Admin", "srv_DT", "srv_DP"],
      "Attachments": [],
      "Deadlines": ["srv_DT:1637539200000:1638144000000", "srv_DP:1637539200000:1638144000000"],
      "Posts": []
  }]

// ordre decroissant
let sorted = Items.sort((a, b) => {
  return b.Date - a.Date
})
console.log('Ordre Decroissant:', sorted)

sorted = Items.sort((a, b) => {
  return a.Date - b.Date
})

console.log('Ordre Croissant:', sorted)
