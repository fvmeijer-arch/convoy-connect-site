(function () {
  'use strict';

  // ---------- Language (EN in the HTML, NL and FR here) ----------
  var NL = {
    'skip': 'Naar de inhoud',
    'nav.mission': 'Missie',
    'nav.how': 'Werkwijze',
    'nav.pilot': 'Pilot',
    'nav.why': 'Waarom het werkt',
    'nav.cta': 'Doe mee',
    'nav.donate': 'Doneer',
    'nav.menu': 'Menu',
    'hero.bold': 'Oorlog in Soedan',
    'hero.intro': 'Ruim 33 miljoen mensen in Soedan hebben hulp nodig en 13 miljoen zijn op de vlucht. Zorgposten sluiten, terwijl in Nederland bruikbare medische apparatuur wordt afgeschreven. Niet de spullen ontbreken, maar de weg ernaartoe.',
    'hero.lead': 'Convoy Connect koppelt overtollige medische apparatuur uit Nederland aan erkende humanitaire organisaties, en regelt en financiert het transport daartussen.',
    'hero.cta1': 'Bied apparatuur of vrachtruimte aan',
    'hero.cta2': 'Bekijk de werkwijze',
    'hero.cue': 'Scroll om de reis te volgen',
    'hero.s3': 'Met jouw donatie betalen we vracht, douane en opslag, zodat medische hulp in Soedan aankomt.',
    'hero.routeTitle': 'Van punt A naar punt B.',
    'route.aTitle': 'Nederland',
    'route.a': 'Punt A: overschot bij een Nederlands ziekenhuis, leverancier of havenbedrijf',
    'route.midTitle': 'Vracht, douane, opslag',
    'route.mid': 'Door ons geregeld en betaald',
    'route.b': 'Punt B: de vrachtdeur van een erkende hulppartner',
    'route.caption': 'Route van Nederland naar Port Sudan. Convoy Connect regelt vracht, douane en opslag tussen beide punten.',
    'feature.kicker': 'In voorbereiding',
    'feature.title': 'Onze eerste zending: overtollige medische apparatuur voor Soedan',
    'feature.body': 'De humanitaire respons in Soedan is zwaar onderfinancierd en de Sudan Health Cluster roept donoren actief op om bij te dragen. We beginnen met één zorgvuldig gedocumenteerde pilotzending.',
    'feature.link': 'Lees over de pilot',
    'mission.title': 'Het knelpunt zijn niet de goederen, maar de logistiek.',
    'mission.p1': 'Europese ziekenhuizen, groothandels en havenbedrijven schrijven regelmatig bruikbare voorraad af. Tegelijkertijd missen hulporganisaties met een concrete vraag de middelen om het transport te betalen, dat vaak duurder is dan de goederen zelf.',
    'mission.p2': 'Vrachtcapaciteit, douaneafhandeling, afstemming met de juiste ontvangende partij en financiering van de reis: in die schakel loopt hulp vast. Op die schakel richten wij ons.',
    'who.title': 'Eén aanspreekpunt voor beide kanten',
    'who.intro': 'Bedrijven met overschot versturen zelden zelf een zending naar een crisisgebied: dat kost tijd, geld en kennis van sanctie- en exportregels. Hulporganisaties kunnen het transport vaak niet betalen. Wij nemen precies dat tussenstuk over.',
    'who.tab1': 'Ziekenhuizen & leveranciers',
    'who.tab2': 'Haven- & logistieke bedrijven',
    'who.tab3': 'Hulporganisaties',
    'who.tab4': 'Donateurs',
    'who.p1Title': 'U heeft bruikbare medische apparatuur die anders wordt afgeschreven',
    'who.p1a': 'Wij inventariseren wat u heeft en controleren of het geëxporteerd mag worden',
    'who.p1b': 'Wij koppelen het aan een geverifieerde vraag van een erkend kanaal',
    'who.p1c': 'Wij regelen ophalen, documenten en vracht, zonder kosten voor u',
    'who.p2Title': 'U heeft onbenutte vrachtruimte, opslag of douanecapaciteit',
    'who.p2a': 'Draag vrachtruimte, opslag of douaneafhandeling bij in natura in plaats van op factuur',
    'who.p2b': 'Sponsor de transportkosten van een concrete, gedocumenteerde zending',
    'who.p2c': 'Ontvang een bevestigd aankomstverslag om te delen met uw stakeholders',
    'who.p3Title': 'U bent een erkende organisatie met een concrete behoefte',
    'who.p3a': 'Geef aan welke apparatuur u nodig heeft; het aanbod volgt de echte vraag, niet andersom',
    'who.p3b': 'Wij dekken vracht, douanedocumenten en opslag tot aan uw vrachtdeur',
    'who.p3c': 'U blijft verantwoordelijk voor de verdeling onder begunstigden',
    'who.p4Title': 'U wilt dat uw gift hulp verplaatst die al bestaat',
    'who.p4a': 'Uw donatie gaat vooral naar transport en coördinatie, en waar nodig naar de aankoop van ontbrekende medische hulpmiddelen',
    'who.p4b': 'Elke zending wordt gedocumenteerd, van intake tot bevestigde aankomst',
    'who.p4c': 'We gaan de ANBI-status aanvragen, zodat giften fiscaal aftrekbaar worden',
    'how.title': 'Vijf stappen, bij elke zending',
    'how.intro': 'We nemen geen verantwoordelijkheid voor de uiteindelijke aflevering. We regelen en financieren het transport van punt A naar punt B, en leggen elke stap vast.',
    'how.s1t': 'Intake',
    'how.s1': 'Een bedrijf meldt overtollige voorraad of vrije capaciteit.',
    'how.s2t': 'Verificatie',
    'how.s2': 'We toetsen of de goederen toegestaan, niet gesanctioneerd en niet dual-use zijn, en of vervoer haalbaar is.',
    'how.s3t': 'Matching',
    'how.s3': 'We koppelen het aanbod aan een actuele, geverifieerde behoefte van een erkend kanaal.',
    'how.s4t': 'Transport & financiering',
    'how.s4': 'Vrachtruimte, douanedocumenten en kosten worden geregeld, gedekt door donaties of sponsoring.',
    'how.s5t': 'Bevestiging',
    'how.s5': 'Aankomst bij de erkende partner wordt bevestigd en vastgelegd, als basis voor verantwoording aan donateurs.',
    'bound.title': 'Specialist in de ontbrekende schakel',
    'bound.intro': 'We richten ons op de logistiek tussen aanbod en vraag, zodat medische hulp terechtkomt waar die het hardst nodig is.',
    'bound.doTitle': 'Wat we wél doen',
    'bound.do1': 'Overtollige voorraad en restcapaciteit bij Nederlandse bedrijven in kaart brengen',
    'bound.do2': 'Die koppelen aan geverifieerde vraag van erkende hulporganisaties',
    'bound.do3': 'Vracht, douane en opslag financieren via donaties en sponsoring',
    'bound.do4': 'Beide kanten van elke zending coördineren en documenteren',
    'bound.do5': 'Waar nodig geld inzamelen voor medische hulpmiddelen die niet als overschot beschikbaar zijn',
    'bound.dontTitle': 'Wat we niet doen',
    'bound.dont2': 'Zelf eindontvangers verifiëren; we werken alleen met erkende mechanismen',
    'bound.dont3': 'Direct afleveren aan begunstigden; onze rol stopt bij de vrachtdeur van een partner',
    'pilot.title': 'Waarom we beginnen met één pilot',
    'pilot.p1': 'Hulporganisaties krijgen veel goedbedoelde aanbiedingen die niet aansluiten op wat er echt nodig is. Wij werken andersom: we beginnen bij een geverifieerde vraag van een erkende hulporganisatie, sturen alleen apparatuur die is getest en aantoonbaar werkt, toetsen elke zending vooraf op sancties en exportregels, en vertrekken pas als het transport betaald is.',
    'pilot.p2': 'Met één zorgvuldig gedocumenteerde pilot willen we laten zien dat die aanpak werkt. We volgen de zending van ophalen tot aankomst en leggen elke stap vast: de controles, de kosten en de doorlooptijden. Pas als de eerste zending aantoonbaar is aangekomen, schalen we op.',
    'pilot.critTitle': 'Het is een succes als',
    'pilot.c1': 'De zending aantoonbaar aankomt bij de beoogde, erkende ontvanger',
    'pilot.c2': 'Het proces gedocumenteerd en herhaalbaar is: checklist, contactpersonen, doorlooptijden',
    'pilot.c3': 'Minstens één havenpartner een volgende zending wil ondersteunen',
    'pilot.note': 'We starten nooit een zending zonder dat de transportkosten vooraf gedekt zijn.',
    'why.title': 'Het matchmaker-model werkt elders al',
    'why.intro': 'Wij zijn nieuw, het model niet. Twee internationale organisaties laten zien wat het op schaal kan.',
    'why.airlink': 'Bundelt beschikbare luchtvrachtcapaciteit en overtollige voorraad voor geverifieerde hulporganisaties, zonder eigen vloot. In 2024 kwam 97,9% van de omzet van $13,1 miljoen uit bijdragen.',
    'why.medshare': 'Herverdeelt overtollige medische middelen naar zorginstellingen in 117 landen. Ontvangers bestellen precies wat ze nodig hebben, zodat gedoneerde apparatuur niet ongebruikt blijft liggen.',
    'why.usTitle': 'Convoy Connect',
    'why.us': 'Brengt dat model naar de Rotterdamse haven, te beginnen met één goed gedocumenteerde zending naar Soedan.',
    'contact.title': 'Apparatuur, vrachtruimte of vragen?',
    'contact.intro': 'Vertel ons wat u kunt aanbieden of nodig heeft. We reageren binnen enkele werkdagen.',
    'form.name': 'Naam',
    'form.nameErr': 'Vul uw naam in, zodat we weten wie we antwoorden.',
    'form.org': 'Organisatie',
    'form.optional': '(optioneel)',
    'form.email': 'E-mail',
    'form.emailErr': 'Vul een e-mailadres in.',
    'form.type': 'Ik wil graag',
    'form.t1': 'Medische apparatuur aanbieden',
    'form.t2': 'Vrachtruimte, opslag of douaneafhandeling aanbieden',
    'form.t3': 'Een behoefte melden als hulporganisatie',
    'form.t4': 'Doneren of een zending sponsoren',
    'form.t5': 'Iets anders vragen',
    'form.msg': 'Bericht',
    'form.msgErr': 'Beschrijf kort wat u kunt aanbieden of nodig heeft.',
    'form.submit': 'Bericht versturen',
    'footer.about': 'Stichting Convoy Connect is een Rotterdamse stichting in oprichting die logistiek bemiddelt tussen overtollige medische apparatuur en geaccrediteerde humanitaire organisaties.',
    'footer.aboutTitle': 'Over ons',
    'footer.tagline': 'Wat hier overbodig is, is daar levensreddend.',
    'footer.nav': 'Navigatie',
    'footer.details': 'Stichtingsgegevens',
    'footer.contact': 'Contact',
    'footer.nl': 'Nederland',
    'footer.disclaimer': 'Disclaimer',
    'footer.cookies': 'Cookiebeleid',
    'footer.privacy': 'Privacyverklaring',
    'footer.kvk': 'KvK-nummer: volgt',
    'footer.anbi': 'ANBI-status: volgt'
  };
  var FR = {
    'skip': 'Aller au contenu',
    'nav.mission': 'Mission',
    'nav.how': 'Méthode',
    'nav.pilot': 'Projet pilote',
    'nav.why': 'Pourquoi ça marche',
    'nav.cta': 'Participer',
    'nav.donate': 'Faire un don',
    'nav.menu': 'Menu',
    'hero.bold': 'Guerre au Soudan',
    'hero.intro': 'Plus de 33 millions de personnes ont besoin d’aide au Soudan et 13 millions ont fui leur foyer. Les centres de santé ferment, alors qu’aux Pays-Bas du matériel médical utilisable est mis au rebut. Ce ne sont pas les équipements qui manquent, mais le chemin pour les acheminer.',
    'hero.lead': 'Convoy Connect met en relation le matériel médical excédentaire des Pays-Bas avec des organisations humanitaires reconnues, et organise et finance le transport entre les deux.',
    'hero.cta1': 'Proposer du matériel ou de l’espace de fret',
    'hero.cta2': 'Découvrir notre méthode',
    'hero.cue': 'Faites défiler pour suivre le trajet',
    'hero.s3': 'Votre don finance le fret, la douane et le stockage, pour que l’aide médicale arrive au Soudan.',
    'hero.routeTitle': 'Du point A au point B.',
    'route.aTitle': 'Pays-Bas',
    'route.a': 'Point A : les surplus d’un hôpital, d’un fournisseur ou d’une entreprise portuaire néerlandais',
    'route.midTitle': 'Fret, douane, stockage',
    'route.mid': 'Organisés et payés par nous',
    'route.b': 'Point B : la porte de fret d’un partenaire humanitaire reconnu',
    'route.caption': 'Trajet des Pays-Bas à Port-Soudan. Convoy Connect organise le fret, la douane et le stockage entre les deux points.',
    'feature.kicker': 'En préparation',
    'feature.title': 'Notre premier envoi : du matériel médical excédentaire pour le Soudan',
    'feature.body': 'La réponse humanitaire au Soudan est gravement sous-financée et le Sudan Health Cluster appelle activement les donateurs à contribuer. Nous commençons par un seul envoi pilote, soigneusement documenté.',
    'feature.link': 'En savoir plus sur le projet pilote',
    'mission.title': 'Le problème, ce ne sont pas les biens, mais la logistique.',
    'mission.p1': 'Les hôpitaux, grossistes et entreprises portuaires européens mettent régulièrement au rebut des stocks encore utilisables. Dans le même temps, les organisations humanitaires qui ont un besoin concret n’ont pas les moyens de payer le transport, souvent plus coûteux que les biens eux-mêmes.',
    'mission.p2': 'Capacité de fret, dédouanement, coordination avec le bon destinataire et financement du voyage : c’est à ce maillon que l’aide se bloque. C’est sur ce maillon que nous nous concentrons.',
    'who.title': 'Un seul interlocuteur pour les deux côtés',
    'who.intro': 'Les entreprises qui ont des surplus envoient rarement elles-mêmes un chargement vers une zone de crise : cela demande du temps, de l’argent et une connaissance des règles de sanctions et d’exportation. Les organisations humanitaires, elles, ne peuvent souvent pas payer le transport. Nous prenons en charge précisément ce maillon intermédiaire.',
    'who.tab1': 'Hôpitaux et fournisseurs',
    'who.tab2': 'Entreprises portuaires et logistiques',
    'who.tab3': 'Organisations humanitaires',
    'who.tab4': 'Donateurs',
    'who.p1Title': 'Vous disposez de matériel médical utilisable qui serait sinon mis au rebut',
    'who.p1a': 'Nous recensons ce que vous avez et vérifions que son exportation est autorisée',
    'who.p1b': 'Nous le relions à un besoin vérifié d’un canal reconnu',
    'who.p1c': 'Nous organisons l’enlèvement, les documents et le fret, sans frais pour vous',
    'who.p2Title': 'Vous disposez d’espace de fret, de stockage ou de capacité douanière inutilisés',
    'who.p2a': 'Contribuez en nature avec de l’espace de fret, du stockage ou du dédouanement, plutôt que sur facture',
    'who.p2b': 'Parrainez les frais de transport d’un envoi concret et documenté',
    'who.p2c': 'Recevez un rapport d’arrivée confirmé à partager avec vos parties prenantes',
    'who.p3Title': 'Vous êtes une organisation reconnue avec un besoin concret',
    'who.p3a': 'Indiquez le matériel dont vous avez besoin ; l’offre suit la demande réelle, et non l’inverse',
    'who.p3b': 'Nous prenons en charge le fret, les documents douaniers et le stockage jusqu’à votre porte de fret',
    'who.p3c': 'Vous restez responsable de la distribution aux bénéficiaires',
    'who.p4Title': 'Vous voulez que votre don achemine une aide qui existe déjà',
    'who.p4a': 'Votre don finance surtout le transport et la coordination et, si nécessaire, l’achat de fournitures médicales manquantes',
    'who.p4b': 'Chaque envoi est documenté, de la prise en charge à l’arrivée confirmée',
    'who.p4c': 'Nous allons demander le statut ANBI néerlandais, afin que les dons deviennent fiscalement déductibles',
    'how.title': 'Cinq étapes, pour chaque envoi',
    'how.intro': 'Nous n’assumons pas la responsabilité de la livraison finale. Nous organisons et finançons le transport du point A au point B, et documentons chaque étape.',
    'how.s1t': 'Prise en charge',
    'how.s1': 'Une entreprise signale un surplus de stock ou une capacité disponible.',
    'how.s2t': 'Vérification',
    'how.s2': 'Nous vérifions que les biens sont autorisés, non soumis à des sanctions et non à double usage, et que le transport est réalisable.',
    'how.s3t': 'Mise en relation',
    'how.s3': 'Nous relions l’offre à un besoin actuel et vérifié d’un canal reconnu.',
    'how.s4t': 'Transport et financement',
    'how.s4': 'L’espace de fret, les documents douaniers et les coûts sont organisés, couverts par des dons ou du parrainage.',
    'how.s5t': 'Confirmation',
    'how.s5': 'L’arrivée chez le partenaire reconnu est confirmée et consignée, ce qui permet de rendre des comptes aux donateurs.',
    'bound.title': 'Spécialistes du maillon manquant',
    'bound.intro': 'Nous nous concentrons sur la logistique entre l’offre et la demande, pour que l’aide médicale arrive là où elle est le plus nécessaire.',
    'bound.doTitle': 'Ce que nous faisons',
    'bound.do1': 'Recenser les surplus de stock et les capacités disponibles des entreprises néerlandaises',
    'bound.do2': 'Les relier aux besoins vérifiés d’organisations humanitaires reconnues',
    'bound.do3': 'Financer le fret, la douane et le stockage grâce aux dons et au parrainage',
    'bound.do4': 'Coordonner et documenter les deux côtés de chaque envoi',
    'bound.do5': 'Si nécessaire, collecter des fonds pour des fournitures médicales qui ne sont pas disponibles en surplus',
    'bound.dontTitle': 'Ce que nous ne faisons pas',
    'bound.dont2': 'Vérifier nous-mêmes les destinataires finaux ; nous travaillons uniquement avec des mécanismes reconnus',
    'bound.dont3': 'Livrer directement aux bénéficiaires ; notre rôle s’arrête à la porte de fret d’un partenaire',
    'pilot.title': 'Pourquoi nous commençons par un seul projet pilote',
    'pilot.p1': 'Les organisations humanitaires reçoivent beaucoup d’offres bien intentionnées qui ne correspondent pas aux besoins réels. Nous faisons l’inverse : nous partons d’un besoin vérifié d’une organisation humanitaire reconnue, n’envoyons que du matériel testé et dont le bon fonctionnement est prouvé, contrôlons chaque envoi au préalable au regard des sanctions et des règles d’exportation, et ne partons que lorsque le transport est payé.',
    'pilot.p2': 'Avec un seul projet pilote soigneusement documenté, nous voulons montrer que cette approche fonctionne. Nous suivons l’envoi de l’enlèvement à l’arrivée et consignons chaque étape : les contrôles, les coûts et les délais. Ce n’est qu’une fois l’arrivée du premier envoi prouvée que nous passerons à plus grande échelle.',
    'pilot.critTitle': 'C’est une réussite si',
    'pilot.c1': 'L’envoi arrive, de façon prouvée, chez le destinataire reconnu prévu',
    'pilot.c2': 'Le processus est documenté et reproductible : liste de contrôle, contacts, délais',
    'pilot.c3': 'Au moins un partenaire portuaire souhaite soutenir un prochain envoi',
    'pilot.note': 'Nous ne lançons jamais un envoi sans que les frais de transport soient couverts à l’avance.',
    'why.title': 'Le modèle de mise en relation fonctionne déjà ailleurs',
    'why.intro': 'Nous sommes nouveaux, le modèle ne l’est pas. Deux organisations internationales montrent ce qu’il permet à grande échelle.',
    'why.airlink': 'Réunit la capacité de fret aérien disponible et les surplus de stock au profit d’organisations humanitaires vérifiées, sans flotte propre. En 2024, 97,9 % de ses recettes de 13,1 millions de dollars provenaient de contributions.',
    'why.medshare': 'Redistribue des fournitures médicales excédentaires à des établissements de santé dans 117 pays. Les destinataires commandent exactement ce dont ils ont besoin, pour que le matériel donné ne reste pas inutilisé.',
    'why.usTitle': 'Convoy Connect',
    'why.us': 'Apporte ce modèle au port de Rotterdam, en commençant par un envoi bien documenté vers le Soudan.',
    'contact.title': 'Du matériel, de l’espace de fret ou des questions ?',
    'contact.intro': 'Dites-nous ce que vous pouvez proposer ou ce dont vous avez besoin. Nous répondons sous quelques jours ouvrables.',
    'form.name': 'Nom',
    'form.nameErr': 'Indiquez votre nom, pour que nous sachions à qui répondre.',
    'form.org': 'Organisation',
    'form.optional': '(facultatif)',
    'form.email': 'E-mail',
    'form.emailErr': 'Indiquez une adresse e-mail.',
    'form.type': 'Je souhaite',
    'form.t1': 'Proposer du matériel médical',
    'form.t2': 'Proposer de l’espace de fret, du stockage ou du dédouanement',
    'form.t3': 'Signaler un besoin en tant qu’organisation humanitaire',
    'form.t4': 'Faire un don ou parrainer un envoi',
    'form.t5': 'Poser une autre question',
    'form.msg': 'Message',
    'form.msgErr': 'Décrivez brièvement ce que vous pouvez proposer ou ce dont vous avez besoin.',
    'form.submit': 'Envoyer le message',
    'footer.about': 'La Stichting Convoy Connect est une fondation en cours de création, basée à Rotterdam, qui fait le lien logistique entre le matériel médical excédentaire et des organisations humanitaires accréditées.',
    'footer.aboutTitle': 'À propos',
    'footer.tagline': 'Ce qui est superflu ici sauve des vies là-bas.',
    'footer.nav': 'Navigation',
    'footer.details': 'Informations sur la fondation',
    'footer.contact': 'Contact',
    'footer.nl': 'Pays-Bas',
    'footer.disclaimer': 'Avertissement',
    'footer.cookies': 'Politique de cookies',
    'footer.privacy': 'Déclaration de confidentialité',
    'footer.kvk': 'Numéro KvK (Chambre de commerce) : à venir',
    'footer.anbi': 'Statut ANBI : à venir'
  };
  var STATUS = {
    en: { opening: 'Your email app is opening with the message ready to send.', invalid: 'Some fields need attention. Check the messages below each field.' },
    nl: { opening: 'Uw e-mailprogramma opent met het bericht klaar om te versturen.', invalid: 'Enkele velden hebben aandacht nodig. Bekijk de meldingen onder de velden.' },
    fr: { opening: 'Votre messagerie s’ouvre avec le message prêt à être envoyé.', invalid: 'Certains champs demandent votre attention. Consultez les messages sous chaque champ.' }
  };

  var nodes = document.querySelectorAll('[data-i18n]');
  var EN = {};
  nodes.forEach(function (el) { EN[el.dataset.i18n] = el.innerHTML; });
  var current = 'en';

  function setLang(lang) {
    current = lang;
    var dict = lang === 'nl' ? NL : lang === 'fr' ? FR : EN;
    nodes.forEach(function (el) {
      var key = el.dataset.i18n;
      if (dict[key] != null) el[lang === 'en' ? 'innerHTML' : 'textContent'] = dict[key];
    });
    document.documentElement.lang = lang;
    document.dispatchEvent(new Event('cc:lang'));
    document.querySelectorAll('.lang__btn').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
    });
    var cur = document.querySelector('.lang-menu__current');
    if (cur) cur.textContent = lang.toUpperCase();
    try { localStorage.setItem('cc-lang', lang); } catch (e) {}
  }

  // Language dropdown
  var langBtn = document.querySelector('.lang-menu__btn');
  var langList = document.getElementById('lang-list');
  function setLangMenu(open) {
    langList.hidden = !open;
    langBtn.setAttribute('aria-expanded', String(open));
  }
  langBtn.addEventListener('click', function () { setLangMenu(langList.hidden); });
  document.addEventListener('click', function (e) {
    if (!langList.hidden && !e.target.closest('.lang-menu')) setLangMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !langList.hidden) { setLangMenu(false); langBtn.focus(); }
  });
  document.querySelectorAll('.lang__btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.lang); setLangMenu(false); langBtn.focus(); });
  });
  var saved = null;
  try { saved = localStorage.getItem('cc-lang'); } catch (e) {}
  var browserLang = (navigator.language || '').slice(0, 2).toLowerCase();
  var startLang = saved || browserLang;
  if (startLang === 'nl' || startLang === 'fr') setLang(startLang);

  // ---------- Header: scrolled state + mobile menu ----------
  var header = document.querySelector('.site-header');
  var onScroll = function () { header.classList.toggle('is-scrolled', window.scrollY > 4); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');
  function closeNav() { nav.classList.remove('is-open'); toggle.setAttribute('aria-expanded', 'false'); }
  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  nav.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) { closeNav(); toggle.focus(); }
  });

  // Highlight the section currently in view
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__list a'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          if (a.getAttribute('href') === '#' + en.target.id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    links.forEach(function (a) { var s = document.querySelector(a.getAttribute('href')); if (s) io.observe(s); });
  }

  // ---------- Tabs (WAI-ARIA pattern) ----------
  var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"]'));
  function selectTab(tab, focus) {
    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute('aria-selected', String(on));
      t.tabIndex = on ? 0 : -1;
      document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
    });
    if (focus) tab.focus();
  }
  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { selectTab(t); });
    t.addEventListener('keydown', function (e) {
      var next = { ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1 }[e.key];
      if (next === undefined) return;
      e.preventDefault();
      selectTab(tabs[(next + tabs.length) % tabs.length], true);
    });
  });

  // ---------- Contact form: validate, then open a pre-filled email ----------
  // Buttons like "Donate" jump to the form with the matching request type chosen
  document.querySelectorAll('[data-form-type]').forEach(function (link) {
    link.addEventListener('click', function () {
      document.getElementById('f-type').selectedIndex = parseInt(link.dataset.formType, 10);
    });
  });
  var form = document.getElementById('contact-form');
  var status = form.querySelector('.form__status');
  var rules = {
    'f-name': function (v) { return v.trim().length > 0; },
    'f-email': function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()); },
    'f-msg': function (v) { return v.trim().length > 0; }
  };
  function check(id) {
    var input = document.getElementById(id);
    var ok = rules[id](input.value);
    input.setAttribute('aria-invalid', String(!ok));
    document.getElementById(id + '-err').hidden = ok;
    return ok;
  }
  Object.keys(rules).forEach(function (id) {
    var input = document.getElementById(id);
    input.addEventListener('blur', function () { if (input.value) check(id); });
    input.addEventListener('input', function () { if (input.getAttribute('aria-invalid') === 'true') check(id); });
  });
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var bad = Object.keys(rules).filter(function (id) { return !check(id); });
    if (bad.length) {
      status.textContent = STATUS[current].invalid;
      document.getElementById(bad[0]).focus();
      return;
    }
    var f = form.elements;
    var subject = f.type.value + ' | ' + f.name.value + (f.organisation.value ? ' (' + f.organisation.value + ')' : '');
    var body = f.message.value + '\n\n' + f.name.value + '\n' + (f.organisation.value ? f.organisation.value + '\n' : '') + f.email.value;
    status.textContent = STATUS[current].opening;
    window.location.href = 'mailto:info@convoyconnect.nl?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });

  // ---------- Video hero: scroll position picks the frame ----------
  var hero = document.querySelector('.vhero');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (hero && !reduce.matches) {
    var FRAMES = 110;
    var canvas = hero.querySelector('.vhero__canvas');
    var ctx = canvas.getContext('2d');
    var panels = Array.prototype.slice.call(hero.querySelectorAll('.vhero__panel'));
    var bar = hero.querySelector('.vhero__progress');
    var imgs = new Array(FRAMES);
    var shown = -1, frameGoal = 0, frameAt = 0, ticking = false;

    hero.classList.remove('is-static');

    function src(i) { return 'hero/hero-' + String(i).padStart(3, '0') + '.webp'; }
    // Load coarse frames first (every 8th), then fill in, so scrubbing works early
    var order = [];
    [8, 4, 2, 1].forEach(function (step) {
      for (var i = 0; i < FRAMES; i += step) if (order.indexOf(i) < 0) order.push(i);
    });
    var next = 0;
    function loadMore() {
      if (next >= order.length) return;
      var i = order[next++], img = new Image();
      img.decoding = 'async';
      img.onload = function () { imgs[i] = img; if (Math.abs(i - frameAt) < 2 || shown < 0) draw(true); loadMore(); };
      img.onerror = loadMore;
      img.src = src(i);
    }
    for (var k = 0; k < 4; k++) loadMore();

    function nearestLoaded(i) {
      for (var d = 0; d < FRAMES; d++) {
        if (imgs[i - d]) return i - d;
        if (imgs[i + d]) return i + d;
      }
      return -1;
    }

    function size() {
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      shown = -1; draw(true);
    }

    function paint(img, alpha) {
      var cw = canvas.width, ch = canvas.height;
      var s = Math.max(cw / img.width, ch / img.height);   // object-fit: cover
      var w = img.width * s, h = img.height * s;
      ctx.globalAlpha = alpha;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      ctx.globalAlpha = 1;
    }

    // Draw the frame at `frameAt`, blending the next frame in by the fractional part
    // so slow scrolling moves smoothly instead of stepping from frame to frame
    function draw(force) {
      var key = Math.round(frameAt * 20);
      if (key === shown && !force) return;
      var a = Math.floor(frameAt), t = frameAt - a;
      if (imgs[a] && (t < 0.05 || !imgs[a + 1])) {
        paint(imgs[a], 1);
      } else if (imgs[a] && imgs[a + 1]) {
        paint(imgs[a], 1);
        paint(imgs[a + 1], t);
      } else {
        var i = nearestLoaded(Math.round(frameAt));
        if (i < 0) return;
        paint(imgs[i], 1);
      }
      shown = key;
    }

    var stage = hero.querySelector('.vhero__stage');
    // the header's compact (scrolled) height, which is where the stage pins
    var headerH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-h')) || 76;

    // 0 when the hero reaches the header, 1 when the pinned stage is about to scroll away
    function progress() {
      var span = hero.offsetHeight - stage.offsetHeight;
      return Math.min(1, Math.max(0, (headerH - hero.getBoundingClientRect().top) / span));
    }

    // Panel opacity: fades over 6% of the scroll at each edge; the first panel starts
    // fully visible and the last one stays visible at the end
    var EDGE = 0.06;
    function opacity(p, from, to) {
      if (p < from || p > to) return 0;
      var fadeIn = from === 0 ? 1 : (p - from) / EDGE;
      var fadeOut = to > 1 ? 1 : (to - p) / EDGE;
      return Math.min(1, fadeIn, fadeOut);
    }

    function update() {
      var p = progress();
      frameGoal = p * (FRAMES - 1);
      bar.style.setProperty('--p', p.toFixed(4));
      panels.forEach(function (el) {
        var o = opacity(p, parseFloat(el.dataset.from), parseFloat(el.dataset.to));
        el.style.setProperty('--o', o.toFixed(3));
        el.classList.toggle('is-on', o > 0.05);
      });
      if (!ticking) { ticking = true; requestAnimationFrame(tick); }
    }

    // Ease toward the frameGoal frame so fast scrolls still look like smooth footage
    function tick() {
      frameAt += (frameGoal - frameAt) * 0.2;
      if (Math.abs(frameGoal - frameAt) < 0.01) frameAt = frameGoal;
      draw(false);
      if (frameAt !== frameGoal) requestAnimationFrame(tick); else ticking = false;
    }

    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', size);
    reduce.addEventListener && reduce.addEventListener('change', function (e) { if (e.matches) location.reload(); });
    size(); update();
  }

  // ---------- Benchmark figures: count up once they scroll into view ----------
  var figures = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function formatFigure(el, value) {
    var dec = parseInt(el.dataset.decimals || '0', 10);
    var text = value.toFixed(dec);
    if (document.documentElement.lang !== 'en') text = text.replace('.', ',');
    el.textContent = text + (el.dataset.suffix || '');
  }
  function countUp(el) {
    var end = parseFloat(el.dataset.count), start = null, DURATION = 2500;
    el.dataset.done = 'running';
    function step(now) {
      if (start === null) start = now;
      var t = Math.min(1, (now - start) / DURATION);
      var eased = 1 - Math.pow(1 - t, 3);            // ease-out: fast start, gentle landing
      formatFigure(el, end * eased);
      if (t < 1) requestAnimationFrame(step); else el.dataset.done = 'yes';
    }
    requestAnimationFrame(step);
  }
  if (figures.length && !reduce.matches && 'IntersectionObserver' in window) {
    figures.forEach(function (el) { formatFigure(el, 0); });
    var fo = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        countUp(en.target);
        fo.unobserve(en.target);
      });
    }, { threshold: 0.6 });
    figures.forEach(function (el) { fo.observe(el); });
  } else {
    figures.forEach(function (el) { formatFigure(el, parseFloat(el.dataset.count)); });
  }
  // keep the decimal separator in step with the language switch
  document.addEventListener('cc:lang', function () {
    figures.forEach(function (el) {
      if (el.dataset.done === 'yes' || !el.dataset.done) {
        formatFigure(el, el.dataset.done === 'yes' || reduce.matches ? parseFloat(el.dataset.count) : 0);
      }
    });
  });

  // ---------- Route diagram: the red line follows the scroll, both ways ----------
  var route = document.querySelector('.route');
  if (route && !reduce.matches) {
    var line = route.querySelector('.route__path--live');
    var routeTicking = false;
    route.classList.add('is-live');

    // 0 once the diagram's top has risen to 72% of the screen height,
    // 1 when its bottom reaches 68%, so the line finishes while the whole route is in view
    function routeProgress() {
      var r = route.getBoundingClientRect(), vh = window.innerHeight;
      var start = vh * 0.72, end = vh * 0.68;
      return Math.min(1, Math.max(0, (start - r.top) / (r.height + start - end)));
    }
    function drawRoute() {
      routeTicking = false;
      var p = routeProgress();
      line.style.strokeDashoffset = (1 - p).toFixed(4);
      route.classList.toggle('reach-mid', p > 0.5);
      route.classList.toggle('reach-b', p > 0.97);
    }
    function onRouteScroll() {
      if (!routeTicking) { routeTicking = true; requestAnimationFrame(drawRoute); }
    }
    window.addEventListener('scroll', onRouteScroll, { passive: true });
    window.addEventListener('resize', onRouteScroll);
    drawRoute();
  }

  document.getElementById('year').textContent = new Date().getFullYear();
})();
