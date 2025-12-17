// --- DATA: SPELL SRD DATABASE (LISTA COMPLETA & ESPANSA PER SOTTOCLASSI) ---
const SPELL_DB = [
    // --- CANTRIPS (Livello 0) ---
    { n: "Amicizia", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Vantaggio su prove di Carisma contro creatura non ostile. Diventa ostile dopo 1 min." },
    { n: "Artificio Druidico", l: 0, c: ["Druido"], d: "Effetti sensoriali minori legati alla natura, accendere fuochi, previsioni meteo." },
    { n: "Beffa Crudele", l: 0, c: ["Bardo"], d: "1d4 danni psichici e svantaggio al prossimo attacco del bersaglio." },
    { n: "Colpo Accurato", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Vantaggio al tuo primo tiro per colpire nel prossimo turno." },
    { n: "Dardo di Fuoco", l: 0, c: ["Mago", "Stregone", "Artefice"], d: "1d10 danni fuoco a distanza. Aumenta ai livelli 5, 11, 17." },
    { n: "Deflagrazione Occulta", l: 0, c: ["Warlock"], d: "1d10 danni forza. Raggi multipli ai livelli alti (1, 5, 11, 17)." },
    { n: "Fiamma Sacra", l: 0, c: ["Chierico"], d: "1d8 danni radiosi su TS Destrezza fallito. Ignora copertura." },
    { n: "Frusta di Spine", l: 0, c: ["Druido", "Artefice"], d: "1d6 perforanti e attira il bersaglio di 3m verso di te." },
    { n: "Guida", l: 0, c: ["Chierico", "Druido", "Artefice"], d: "+1d4 a una prova di abilità a scelta." },
    { n: "Illusione Minore", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Crei suono o immagine di un oggetto immobile (max 1.5m)." },
    { n: "Interdizione alle Lame", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Resistenza danni contundenti, perforanti, taglienti da armi fino al prossimo turno." },
    { n: "Luci Danzanti", l: 0, c: ["Bardo", "Mago", "Stregone", "Artefice"], d: "Crea fino a 4 luci fioche mobili." },
    { n: "Luce", l: 0, c: ["Bardo", "Chierico", "Mago", "Stregone", "Artefice"], d: "Oggetto emana luce intensa 6m e fioca 6m per 1 ora." },
    { n: "Mano Magica", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock", "Artefice"], d: "Mano spettrale manipola oggetti entro 9m." },
    { n: "Messaggio", l: 0, c: ["Bardo", "Mago", "Stregone"], d: "Sussurri un messaggio a creatura entro 36m." },
    { n: "Prestidigitazione", l: 0, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Effetti sensoriali minori, accendere fuochi, pulire, riscaldare." },
    { n: "Produrre Fiamma", l: 0, c: ["Druido"], d: "Fiamma nella mano (luce) o attacco 1d8 fuoco." },
    { n: "Raggio di Gelo", l: 0, c: ["Mago", "Stregone", "Artefice"], d: "1d8 freddo e riduce velocità bersaglio di 3m." },
    { n: "Resistenza", l: 0, c: ["Chierico", "Druido", "Artefice"], d: "+1d4 a un Tiro Salvezza." },
    { n: "Riparare", l: 0, c: ["Bardo", "Chierico", "Druido", "Mago", "Artefice"], d: "Ripari una singola rottura in un oggetto." },
    { n: "Spruzzo Acido", l: 0, c: ["Mago", "Stregone", "Artefice"], d: "1d6 acido a una o due creature entro 1.5m l'una dall'altra. TS Dex." },
    { n: "Spruzzo Velenoso", l: 0, c: ["Druido", "Mago", "Stregone", "Warlock", "Artefice"], d: "1d12 danni veleno su TS Costituzione fallito." },
    { n: "Stabilizzare", l: 0, c: ["Bardo", "Chierico", "Druido", "Artefice"], d: "Stabilizzi una creatura morente (0 PF)." },
    { n: "Stretta Folgorante", l: 0, c: ["Mago", "Stregone", "Artefice"], d: "1d8 fulmine a contatto, bersaglio perde reazioni. Vantaggio se metallo." },
    { n: "Taumaturgia", l: 0, c: ["Chierico", "Tiefling"], d: "Effetti minori soprannaturali: voce tonante, tremori, fiamme tremolanti." },
    { n: "Tocco Gelido", l: 0, c: ["Mago", "Stregone", "Warlock"], d: "1d8 necrotici, bersaglio non può recuperare PF." },
    { n: "Scheggia Psichica", l: 0, c: ["Mago", "Stregone", "Warlock"], d: "Mind Sliver. 1d6 psichici e -1d4 al prossimo TS del bersaglio." },
    { n: "Rombo del Tuono", l: 0, c: ["Druido", "Mago", "Stregone", "Artefice"], d: "Thunderclap. 1d6 tuono in area 1.5m attorno a te." },

    // --- LIVELLO 1 ---
    { n: "Allarme", l: 1, c: ["Mago", "Ranger", "Artefice", "Stregone"], d: "Protegge un'area. Suono o mentale." }, // Stregone (Anima Meccanica)
    { n: "Armatura Magica", l: 1, c: ["Mago", "Stregone"], d: "CA diventa 13 + Des per 8 ore." },
    { n: "Assorbire Elementi", l: 1, c: ["Druido", "Ranger", "Mago", "Stregone", "Artefice"], d: "Reazione. Resistenza al danno elementale ricevuto e danni extra al prossimo attacco." },
    { n: "Bacche Benefiche", l: 1, c: ["Druido", "Ranger"], d: "Crea 10 bacche, ognuna cura 1 PF e nutre per un giorno." },
    { n: "Benedizione", l: 1, c: ["Chierico", "Paladino", "Stregone"], d: "+1d4 a TxC e TS per 3 creature." }, // Stregone (Anima Divina)
    { n: "Braccia di Hadar", l: 1, c: ["Warlock", "Stregone"], d: "2d6 necrotici a creature entro 3m e niente reazioni." }, // Stregone (Mente Aberrante)
    { n: "Comando", l: 1, c: ["Chierico", "Paladino"], d: "Obbliga creatura a eseguire un comando (es. 'Fuggi', 'Cadi')." },
    { n: "Cura Ferite", l: 1, c: ["Bardo", "Chierico", "Druido", "Paladino", "Ranger", "Artefice", "Stregone", "Warlock"], d: "Tocco. Cura 1d8 + mod incantatore." }, // Stregone (Divina), Warlock (Celestiale)
    { n: "Dardo Incantato", l: 1, c: ["Mago", "Stregone"], d: "3 dardi infallibili, 1d4+1 forza ciascuno." },
    { n: "Dardo Tracciante", l: 1, c: ["Chierico"], d: "4d6 danni radiosi e vantaggio prossimo TxC contro il bersaglio." },
    { n: "Dardo Stregato", l: 1, c: ["Warlock"], d: "1d12 danni fulmine, o danni continuati se concentrazione." },
    { n: "Duello Compulsivo", l: 1, c: ["Paladino"], d: "Costringe nemico ad attaccare te. Svantaggio vs altri." },
    { n: "Eroismo", l: 1, c: ["Bardo", "Paladino"], d: "Immunità paura e PF temporanei ogni turno." },
    { n: "Fuoco Fatato", l: 1, c: ["Bardo", "Druido", "Artefice", "Chierico"], d: "Vantaggio ai TxC contro creature nell'area, niente invisibilità." }, // Chierico (Luce/Crepuscolo)
    { n: "Identificare", l: 1, c: ["Bardo", "Mago", "Artefice"], d: "Rivela proprietà magiche di un oggetto." },
    { n: "Immagine Silenziosa", l: 1, c: ["Bardo", "Mago", "Stregone"], d: "Illusione visiva in un cubo di 4.5m." },
    { n: "Individuazione del Magico", l: 1, c: ["Tutti"], d: "Percepisci presenza di magia entro 9m." },
    { n: "Infliggere Ferite", l: 1, c: ["Chierico", "Stregone"], d: "3d10 danni necrotici a contatto." }, // Stregone (Divina)
    { n: "Intralciare", l: 1, c: ["Druido"], d: "Rovi trattengono creature in area 6m (TS Forza)." },
    { n: "Malocchio", l: 1, c: ["Warlock"], d: "+1d6 danni necrotici su ogni colpo, svantaggio su caratteristica." },
    { n: "Mani Brucianti", l: 1, c: ["Mago", "Stregone", "Chierico", "Warlock"], d: "Cono 4.5m, 3d6 fuoco, dimezza TS Des." }, // Chierico (Luce), Warlock (Immondo)
    { n: "Marchio del Cacciatore", l: 1, c: ["Ranger", "Paladino"], d: "+1d6 danni arma e vantaggio sopravvivenza/percezione." },
    { n: "Nube di Nebbia", l: 1, c: ["Druido", "Ranger", "Mago", "Stregone", "Chierico"], d: "Crea area pesantemente oscurata." }, // Chierico (Tempesta)
    { n: "Onda Tonante", l: 1, c: ["Bardo", "Druido", "Mago", "Stregone", "Chierico"], d: "Cubo 4.5m. 2d8 tuono e spinge via 3m." }, // Chierico (Tempesta)
    { n: "Parola Guaritrice", l: 1, c: ["Bardo", "Chierico", "Druido", "Stregone"], d: "Bonus action: cura 1d4 + mod a distanza." }, // Stregone (Divina)
    { n: "Protezione dal Bene e dal Male", l: 1, c: ["Chierico", "Paladino", "Warlock", "Mago", "Stregone"], d: "Immondi/Non morti hanno svantaggio a colpirti." }, // Stregone (Anima Meccanica)
    { n: "Reprimenda Infernale", l: 1, c: ["Warlock", "Tiefling"], d: "Reazione. 2d10 fuoco a chi ti colpisce." },
    { n: "Risata Incontenibile di Tasha", l: 1, c: ["Bardo", "Mago", "Stregone"], d: "Bersaglio prono e inabile se fallisce TS Saggezza (ride)." }, // Stregone (Mente Aberrante) -> Scambiabile
    { n: "Scudo", l: 1, c: ["Mago", "Stregone", "Warlock"], d: "Reazione: +5 CA e immunità a Dardo Incantato." }, // Warlock (Hexblade)
    { n: "Scudo della Fede", l: 1, c: ["Chierico", "Paladino", "Stregone"], d: "+2 CA a una creatura per 10 min." }, // Stregone (Divina)
    { n: "Sfera Cromatica", l: 1, c: ["Mago", "Stregone"], d: "3d8 danni elementali a scelta (fuoco, freddo, fulmine, ecc)." },
    { n: "Sonno", l: 1, c: ["Bardo", "Mago", "Stregone", "Chierico"], d: "Addormenta creature per 5d8 PF totali." }, // Chierico (Crepuscolo)
    { n: "Sussurri Dissonanti", l: 1, c: ["Bardo", "Stregone"], d: "3d6 psichici e il bersaglio deve usare reazione per fuggire." }, // Stregone (Mente Aberrante)
    { n: "Unto", l: 1, c: ["Mago", "Artefice"], d: "Terreno scivoloso (TS Dex o prono)." },

    // --- LIVELLO 2 ---
    { n: "Aiuto", l: 2, c: ["Chierico", "Paladino", "Artefice", "Stregone"], d: "+5 PF max e attuali a 3 creature per 8 ore." }, // Stregone (Anima Meccanica)
    { n: "Arma Magica", l: 2, c: ["Mago", "Paladino", "Artefice"], d: "Arma diventa magica +1." },
    { n: "Arma Spirituale", l: 2, c: ["Chierico", "Stregone"], d: "Bonus Action. Arma spettrale attacca 1d8+mod." }, // Stregone (Divina)
    { n: "Calmare Emozioni", l: 2, c: ["Bardo", "Chierico", "Stregone"], d: "Sopprime paura/charme o rende indifferenti creature ostili." }, // Stregone (Mente Aberrante)
    { n: "Cecità/Sordità", l: 2, c: ["Bardo", "Chierico", "Mago", "Stregone"], d: "Rende cieco o sordo un bersaglio. TS Cos." },
    { n: "Crescita di Spine", l: 2, c: ["Druido", "Ranger"], d: "Terreno difficile, 2d4 danni ogni 1.5m di movimento." },
    { n: "Frantumare", l: 2, c: ["Bardo", "Chierico", "Mago", "Stregone", "Warlock"], d: "Sfera raggio 3m, 3d8 tuono, TS Cos dimezza. Danni a oggetti/costrutti." }, // Chierico (Tempesta)
    { n: "Immagine Speculare", l: 2, c: ["Bardo", "Mago", "Stregone", "Warlock", "Chierico"], d: "Crea 3 copie illusorie che possono assorbire gli attacchi." }, // Chierico (Inganno)
    { n: "Immobilizza Persone", l: 2, c: ["Bardo", "Chierico", "Druido", "Mago", "Stregone", "Warlock"], d: "Paralizza umanoide su TS Saggezza fallito." },
    { n: "Individuazione dei Pensieri", l: 2, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Leggi pensieri superficiali o profondi." }, // Stregone (Mente Aberrante)
    { n: "Invisibilità", l: 2, c: ["Bardo", "Mago", "Stregone", "Warlock", "Artefice", "Druido"], d: "Creatura invisibile finché non attacca/lancia incantesimi." }, // Druido (Terra)
    { n: "Mano Spettrale", l: 2, c: ["Mago"], d: "Mano grande che spinge o danneggia." },
    { n: "Messaggio", l: 2, c: ["Bardo", "Chierico", "Mago", "Stregone", "Warlock"], d: "Sending. Invii messaggio mentale ovunque (anche altri piani)." }, // Stregone (Mente Aberrante)
    { n: "Oscurità", l: 2, c: ["Mago", "Stregone", "Warlock", "Tiefling"], d: "Sfera di oscurità magica impenetrabile a scurovisione." },
    { n: "Passare Senza Tracce", l: 2, c: ["Druido", "Ranger", "Chierico"], d: "+10 Furtività al gruppo, non lasciate tracce." }, // Chierico (Inganno)
    { n: "Passo Velato", l: 2, c: ["Mago", "Stregone", "Warlock", "Ranger", "Druido"], d: "Teletrasporto 9m come azione bonus." }, // Druido (Terra)
    { n: "Pelle Coriacea", l: 2, c: ["Druido", "Ranger"], d: "La CA non può essere inferiore a 16." },
    { n: "Raggio di Luna", l: 2, c: ["Druido", "Chierico", "Paladino"], d: "Cilindro di luce fa 2d10 radiosi (TS Cos) e impedisce mutaforma." }, // Chierico (Crepuscolo), Paladino (Antichi)
    { n: "Raggio Rovente", l: 2, c: ["Mago", "Stregone", "Chierico", "Warlock"], d: "3 raggi, 2d6 fuoco ciascuno." }, // Chierico (Luce), Warlock (Immondo/Genio)
    { n: "Ragnatela", l: 2, c: ["Mago", "Stregone", "Artefice"], d: "Intrappola creature in cubo 6m (TS Dex o Forza per uscire)." },
    { n: "Ristorare Inferiore", l: 2, c: ["Bardo", "Chierico", "Druido", "Paladino", "Ranger", "Artefice", "Stregone"], d: "Cura cecità, sordità, paralisi o veleno." }, // Stregone (Anima Meccanica/Divina)
    { n: "Suggestione", l: 2, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Costringe creatura a seguire un corso d'azione ragionevole." },
    { n: "Vedere Invisibilità", l: 2, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Vedi creature invisibili ed eteree." },
    
    // --- LIVELLO 3 ---
    { n: "Animare Morti", l: 3, c: ["Chierico", "Mago", "Stregone"], d: "Crea scheletro o zombi da cadavere." }, // Stregone (Divina)
    { n: "Controincantesimo", l: 3, c: ["Mago", "Stregone", "Warlock"], d: "Reazione. Interrompi incantesimo avversario." },
    { n: "Dissolvi Magie", l: 3, c: ["Bardo", "Chierico", "Druido", "Paladino", "Stregone", "Warlock", "Mago", "Artefice"], d: "Termina effetti magici su bersaglio." },
    { n: "Fame di Hadar", l: 3, c: ["Warlock", "Stregone"], d: "Sfera di oscurità e freddo/acido. Difficile uscirne." }, // Stregone (Mente Aberrante)
    { n: "Fulmine", l: 3, c: ["Mago", "Stregone", "Druido"], d: "Linea 30m, 8d6 fulmine." }, // Druido (Montagna/Terra)
    { n: "Invocare il Fulmine", l: 3, c: ["Druido", "Chierico"], d: "Fulmini in area 3d10 ogni turno." }, // Chierico (Tempesta)
    { n: "Palla di Fuoco", l: 3, c: ["Mago", "Stregone", "Warlock", "Chierico"], d: "8d6 fuoco in raggio 6m." }, // Warlock (Immondo), Chierico (Luce)
    { n: "Parola Guaritrice di Massa", l: 3, c: ["Chierico", "Stregone"], d: "Cura 1d4+mod a 6 creature, Bonus Action." }, // Stregone (Divina)
    { n: "Paura", l: 3, c: ["Bardo", "Mago", "Stregone", "Warlock", "Paladino"], d: "Cono 9m, creature lasciano cadere oggetti e fuggono." }, // Paladino (Conquista)
    { n: "Respirare Sott'acqua", l: 3, c: ["Druido", "Ranger", "Mago", "Stregone", "Artefice"], d: "10 creature respirano acqua per 24h." },
    { n: "Rianimare Morti", l: 3, c: ["Bardo", "Chierico", "Paladino", "Stregone", "Ranger", "Druido"], d: "Rinascita (Revivify). Ritorna in vita creatura morta da <1 min (costo 300mo)." }, // Stregone (Divina), Ranger (Tasha), Druido (Fuoco Selvatico)
    { n: "Spiriti Guardiani", l: 3, c: ["Chierico", "Paladino", "Stregone"], d: "Aura dannosa 3d8 (radiosi/necrotici) attorno a te." }, // Stregone (Divina)
    { n: "Trama Ipnotica", l: 3, c: ["Bardo", "Mago", "Stregone", "Warlock", "Paladino"], d: "Creature in cubo 9m affascinate e inabili." }, // Paladino (Redenzione)
    { n: "Velocità", l: 3, c: ["Mago", "Stregone", "Artefice", "Ranger"], d: "+2 CA, raddoppia velocità, azione extra (Haste)." }, // Ranger (Orizzonte)
    { n: "Volare", l: 3, c: ["Mago", "Stregone", "Warlock", "Artefice"], d: "Velocità volo 18m." },
    
    // --- LIVELLO 4 ---
    { n: "Bandimento", l: 4, c: ["Chierico", "Mago", "Paladino", "Stregone", "Warlock"], d: "Esilia una creatura su un altro piano (permanente se 1 min)." },
    { n: "Invisibilità Superiore", l: 4, c: ["Bardo", "Mago", "Stregone", "Warlock", "Chierico"], d: "Invisibile anche se attacchi, per 1 min." }, // Chierico (Crepuscolo), Warlock (Genio/Archfey)
    { n: "Metamorfosi", l: 4, c: ["Bardo", "Druido", "Mago", "Stregone"], d: "Trasforma creatura in bestia (Polymorph)." },
    { n: "Muro di Fuoco", l: 4, c: ["Druido", "Mago", "Stregone", "Chierico", "Warlock"], d: "Muro fa 5d8 fuoco a chi attraversa." }, // Chierico (Luce), Warlock (Immondo)
    { n: "Porta Dimensionale", l: 4, c: ["Bardo", "Mago", "Stregone", "Warlock"], d: "Teletrasporto 150m con un passeggero." },
    { n: "Tentacoli Neri di Evard", l: 4, c: ["Mago", "Stregone"], d: "Area difficile, trattiene e fa danni." }, // Stregone (Mente Aberrante)

    // --- LIVELLO 5 ---
    { n: "Guarigione Superiore", l: 5, c: ["Bardo", "Chierico", "Druido", "Stregone", "Warlock"], d: "Cura 4d8 + mod a creature multiple." }, // Stregone (Divina), Warlock (Celestiale)
    { n: "Rianimare", l: 5, c: ["Bardo", "Chierico", "Paladino", "Stregone"], d: "Raise Dead. Ritorna in vita morto da <10 giorni." }, // Stregone (Divina)
    { n: "Muro di Forza", l: 5, c: ["Mago", "Artefice"], d: "Crea barriera indistruttibile." }, // Artefice (Armaiolo)
    { n: "Legame Telepatico", l: 5, c: ["Bardo", "Mago", "Artefice", "Stregone"], d: "Rary's Telepathic Bond. Comunicazione telepatica per il gruppo." }, // Stregone (Mente Aberrante)
    { n: "Telecinesi", l: 5, c: ["Mago", "Stregone"], d: "Muovi oggetti o creature con la mente." } // Stregone (Mente Aberrante - già in lista ma specificato per chiarezza)
];

// --- DATA: FEATURES DB (Structured & Expanded) ---
const FEATURE_DB = [
    // SOTTOCLASSI STREGONE
    { n: "Origine: Discendenza Draconica", type: "Origine", req: "Stregone", d: "+1 PF per livello, pelle scagliosa (CA 13+Des)." },
    { n: "Origine: Magia Selvaggia", type: "Origine", req: "Stregone", d: "Possibilità di effetti casuali (Surge) dopo incantesimi di lv 1+." },
    { n: "Origine: Anima Divina", type: "Origine", req: "Stregone", d: "Accesso alla lista incantesimi da Chierico, Favore degli Dei (2d4 al TS)." },
    { n: "Origine: Stregoneria delle Ombre", type: "Origine", req: "Stregone", d: "Scurovisione 36m, Forza della Tomba (Sopravvivi a 1PF)." },
    { n: "Origine: Tempesta", type: "Origine", req: "Stregone", d: "Volo limitato, danni tuono/fulmine extra." },
    { n: "Origine: Mente Aberrante", type: "Origine", req: "Stregone", d: "Incantesimi Psionici (es. Sussurri Dissonanti), Telepatia entro 9m." },
    { n: "Origine: Anima Meccanica", type: "Origine", req: "Stregone", d: "Clockwork Soul. Annulla Vantaggio/Svantaggio, Scudo Bastione." },

    // SOTTOCLASSI WARLOCK
    { n: "Patto: Il Signore Fatato", type: "Origine", req: "Warlock", d: "Abilità di charme e illusione, Presenza Fatata." },
    { n: "Patto: L'Immondo", type: "Origine", req: "Warlock", d: "Guadagni PF temporanei quando uccidi nemici. Accesso a Palla di Fuoco." },
    { n: "Patto: Il Grande Antico", type: "Origine", req: "Warlock", d: "Telepatia e magie mentali." },
    { n: "Patto: Il Celestiale", type: "Origine", req: "Warlock", d: "Cure bonus, Luce Sacra, accesso a Cura Ferite." },
    { n: "Patto: Lama del Malocchio (Hexblade)", type: "Origine", req: "Warlock", d: "Usi Carisma per attaccare, Maledizione Hexblade, accesso a Scudo." },
    { n: "Patto: Il Genio", type: "Origine", req: "Warlock", d: "Vaso del Genio (rifugio), Danni elementali extra." },

    // SOTTOCLASSI CHIERICO
    { n: "Dominio della Vita", type: "Origine", req: "Chierico", d: "Bonus cure: 2 + livello incantesimo." },
    { n: "Dominio della Guerra", type: "Origine", req: "Chierico", d: "Azione bonus per fare un attacco extra (limitato)." },
    { n: "Dominio della Luce", type: "Origine", req: "Chierico", d: "Bagliore protettivo, accesso a Palla di Fuoco." },
    { n: "Dominio della Tempesta", type: "Origine", req: "Chierico", d: "Reazione per danni tuono/fulmine." },
    { n: "Dominio dell'Inganno", type: "Origine", req: "Chierico", d: "Vantaggio Furtività, Duplicato Illusorio." },
    { n: "Dominio del Crepuscolo", type: "Origine", req: "Chierico", d: "Scurovisione 90m, Iniziativa Vantaggio, Santuario del Crepuscolo (PF Temp)." },
    { n: "Dominio della Pace", type: "Origine", req: "Chierico", d: "Legame Emboldening (+1d4 a TxC/TS)." },

    // SOTTOCLASSI PALADINO
    { n: "Giuramento di Devozione", type: "Origine", req: "Paladino", d: "Aura sacra, scaccia immondi, Arma Sacra." },
    { n: "Giuramento della Vendetta", type: "Origine", req: "Paladino", d: "Vantaggio contro nemico giurato." },
    { n: "Giuramento degli Antichi", type: "Origine", req: "Paladino", d: "Resistenza danni incantesimi (aura)." },
    { n: "Giuramento di Conquista", type: "Origine", req: "Paladino", d: "Aura di paura, colpo guidato." },

    // SOTTOCLASSI MAGO
    { n: "Tradizione: Abiurazione", type: "Origine", req: "Mago", d: "Protezione Arcana (scudo PF)." },
    { n: "Tradizione: Invocazione", type: "Origine", req: "Mago", d: "Scolpisci incantesimi per non colpire alleati." },
    { n: "Tradizione: Necromanzia", type: "Origine", req: "Mago", d: "Recuperi PF uccidendo nemici." },
    { n: "Tradizione: Divinazione", type: "Origine", req: "Mago", d: "Portento (sostituisci dadi)." },
    { n: "Tradizione: Lame Danzanti", type: "Origine", req: "Mago", d: "Bladesinging. Bonus CA e concentrazione in danza." },

    // SOTTOCLASSI GUERRIERO
    { n: "Archetipo: Campione", type: "Origine", req: "Guerriero", d: "Critico con 19 o 20." },
    { n: "Archetipo: Maestro di Battaglia", type: "Origine", req: "Guerriero", d: "Manovre tattiche e dadi di superiorità." },
    { n: "Archetipo: Cavaliere Eldritch", type: "Origine", req: "Guerriero", d: "Incantesimi da Mago, Legame con l'Arma." },
    { n: "Archetipo: Guerriero Psi", type: "Origine", req: "Guerriero", d: "Dadi Psionici per danni e riduzione danni." },

    // SOTTOCLASSI LADRO
    { n: "Archetipo: Furfante", type: "Origine", req: "Ladro", d: "Mani veloci, uso oggetti come bonus action." },
    { n: "Archetipo: Assassino", type: "Origine", req: "Ladro", d: "Vantaggio vs chi non ha agito, Critico su sorpresa." },
    { n: "Archetipo: Mistificatore Arcano", type: "Origine", req: "Ladro", d: "Incantesimi, Mano Magica potenziata." },
    { n: "Archetipo: Spadaccino", type: "Origine", req: "Ladro", d: "Swashbuckler. Furtivo se in 1v1, Disimpegno gratuito." },

    // SOTTOCLASSI DRUIDO
    { n: "Circolo della Terra", type: "Origine", req: "Druido", d: "Recupero slot extra, magie del circolo (es. Invisibilità)." },
    { n: "Circolo della Luna", type: "Origine", req: "Druido", d: "Forma Selvatica da Combattimento (azione bonus)." },
    { n: "Circolo delle Stelle", type: "Origine", req: "Druido", d: "Forma Stellata (bonus cure, danni o concentrazione)." },

    // SOTTOCLASSI MONACO
    { n: "Via della Mano Aperta", type: "Origine", req: "Monaco", d: "Effetti extra su Raffica di Colpi." },
    { n: "Via dell'Ombra", type: "Origine", req: "Monaco", d: "Incantesimi oscuri usando Ki." },
    
    // SOTTOCLASSI RANGER
    { n: "Conclave: Cacciatore", type: "Origine", req: "Ranger", d: "Danni extra (Colosso) o attacchi extra (Orda)." },
    { n: "Conclave: Signore delle Bestie", type: "Origine", req: "Ranger", d: "Compagno animale." },
    { n: "Conclave: Viandante Fatato", type: "Origine", req: "Ranger", d: "Danni psichici extra, bonus carisma." },

    // SOTTOCLASSI BARDO
    { n: "Collegio della Sapienza", type: "Origine", req: "Bardo", d: "Competenze extra, Parole Taglienti." },
    { n: "Collegio del Valore", type: "Origine", req: "Bardo", d: "Competenze armi/armature, Ispirazione al combattimento." },
    { n: "Collegio dell'Eloquenza", type: "Origine", req: "Bardo", d: "Non puoi fare meno di 10 su Persuasione/Inganno." },

    // DONI DEL PATTO (Warlock) - TYPE: "Classe"
    { n: "Dono: Patto della Lama", type: "Classe", req: "Warlock", d: "Puoi evocare un'arma magica nella tua mano." },
    { n: "Dono: Patto della Catena", type: "Classe", req: "Warlock", d: "Ottieni un famiglio potenziato (Imp, Quasit, ecc)." },
    { n: "Dono: Patto del Tomo", type: "Classe", req: "Warlock", d: "Ottieni un libro delle ombre e 3 trucchetti da qualsiasi lista." },
    { n: "Dono: Patto del Talismano", type: "Classe", req: "Warlock", d: "+1d4 alle prove di abilità fallite." },

    // RAZZIALI
    { n: "Scurovisione", type: "Razziale", req: "Tutti", d: "Vedi al buio entro 18m come se fosse luce fioca." },
    { n: "Mani Guaritrici", type: "Razziale", req: "Aasimar", d: "Azione: tocchi creatura e cura pari al tuo livello. 1 volta/riposo lungo." },
    { n: "Resistenza Necrotica", type: "Razziale", req: "Aasimar", d: "Hai resistenza ai danni necrotici." },
    { n: "Portatore di Luce", type: "Razziale", req: "Aasimar", d: "Conosci il trucchetto Luce." },
    { n: "Resistenza Infernale", type: "Razziale", req: "Tiefling", d: "Hai resistenza ai danni da fuoco." },
    { n: "Eredità Infernale", type: "Razziale", req: "Tiefling", d: "Conosci Taumaturgia. Lv3: Reprimenda Infernale. Lv5: Oscurità." },
    { n: "Retaggio Fatato", type: "Razziale", req: "Elfo", d: "Vantaggio ai TS contro charme, immunità al sonno magico." },
    { n: "Sensi Acuti", type: "Razziale", req: "Elfo", d: "Competenza in Percezione." },
    { n: "Trance", type: "Razziale", req: "Elfo", d: "4 ore di meditazione valgono come 8 ore di sonno." },
    { n: "Resilienza Nanica", type: "Razziale", req: "Nano", d: "Vantaggio ai TS veleno e resistenza danni veleno." },
    { n: "Competenza Combattimento Nanico", type: "Razziale", req: "Nano", d: "Competenza asce e martelli." },
    { n: "Fortunato", type: "Razziale", req: "Halfling", d: "Ritira gli 1 naturali su TxC, abilità e TS." },
    { n: "Coraggioso", type: "Razziale", req: "Halfling", d: "Vantaggio ai TS contro paura." },
    { n: "Agilità Halfling", type: "Razziale", req: "Halfling", d: "Puoi muoverti attraverso spazi di creature più grandi." },
    { n: "Soffio del Drago", type: "Razziale", req: "Dragonide", d: "Cono o linea di danno elementale. TS Dex o Con." },
    { n: "Astuzia Gnomesca", type: "Razziale", req: "Gnomo", d: "Vantaggio TS Int, Sag, Car contro magia." },
    { n: "Tenacia Implacabile", type: "Razziale", req: "Mezzorco", d: "Se scendi a 0 PF ma non muori, vai a 1 PF (1 volta/riposo)." },
    { n: "Attacchi Selvaggi", type: "Razziale", req: "Mezzorco", d: "Un dado extra ai danni critici in mischia." },
    { n: "Versatilità nelle Abilità", type: "Razziale", req: "Mezzelfo", d: "Competenza in 2 abilità a scelta." },
    
    // STILI DI COMBATTIMENTO
    { n: "Stile: Architettura", type: "Classe", req: "Tutti", d: "+2 ai TxC con armi a distanza (Guerriero/Ranger)." },
    { n: "Stile: Difesa", type: "Classe", req: "Tutti", d: "+1 alla CA quando indossi armatura." },
    { n: "Stile: Duellare", type: "Classe", req: "Tutti", d: "+2 danni con armi ad una mano se l'altra è libera." },
    { n: "Stile: Armi Grandi", type: "Classe", req: "Tutti", d: "Ritira 1 o 2 ai danni con armi a due mani." },
    { n: "Stile: Protezione", type: "Classe", req: "Tutti", d: "Reazione per dare svantaggio a un attacco contro un alleato vicino (richiede scudo)." },
    { n: "Stile: Combattere con Due Armi", type: "Classe", req: "Tutti", d: "Aggiungi mod caratteristica ai danni della seconda arma." },
    { n: "Stile: Combattere alla Cieca", type: "Classe", req: "Tutti", d: "Vista cieca 3m." },

    // METAMAGIA
    { n: "Metamagia: Accurata", type: "Classe", req: "Stregone", d: "1 PS: I bersagli superano automaticamente il TS (es. Palla di Fuoco sugli amici)." },
    { n: "Metamagia: Distante", type: "Classe", req: "Stregone", d: "1 PS: Raddoppia la gittata o rendi a contatto 9m." },
    { n: "Metamagia: Potenziata", type: "Classe", req: "Stregone", d: "1 PS: Ritira dadi danno pari a Carisma." },
    { n: "Metamagia: Estesa", type: "Classe", req: "Stregone", d: "1 PS: Raddoppia la durata (max 24h)." },
    { n: "Metamagia: Intensificata", type: "Classe", req: "Stregone", d: "3 PS: Svantaggio al primo TS del bersaglio." },
    { n: "Metamagia: Rapida", type: "Classe", req: "Stregone", d: "2 PS: Lancia come azione bonus invece che azione." },
    { n: "Metamagia: Sottile", type: "Classe", req: "Stregone", d: "1 PS: Lancia senza componenti V o S." },
    { n: "Metamagia: Raddoppiata", type: "Classe", req: "Stregone", d: "PS pari a livello spell: Colpisci un secondo bersaglio." },
    { n: "Metamagia: Trasmutata", type: "Classe", req: "Stregone", d: "1 PS: Cambia il tipo di danno elementale." },

    // BASE CLASS FEATURES
    { n: "Ira", type: "Classe", req: "Barbaro", d: "Vantaggio prove Forza, bonus danni, resistenza contundente/tagliente/perforante." },
    { n: "Difesa Senza Armatura (Barbaro)", type: "Classe", req: "Barbaro", d: "CA = 10 + Des + Cos." },
    { n: "Difesa Senza Armatura (Monaco)", type: "Classe", req: "Monaco", d: "CA = 10 + Des + Sag." },
    { n: "Ispirazione Bardica", type: "Classe", req: "Bardo", d: "Bonus Action: dai un d6 (o sup) a un alleato per prove/txc/ts." },
    { n: "Maestria", type: "Classe", req: "Tutti", d: "Raddoppia bonus competenza in 2 abilità (Ladro/Bardo)." },
    { n: "Incanalare Divinità", type: "Classe", req: "Chierico", d: "Effetto magico specifico del dominio." },
    { n: "Forma Selvatica", type: "Classe", req: "Druido", d: "Ti trasformi in una bestia." },
    { n: "Recupero Energie", type: "Classe", req: "Guerriero", d: "Bonus Action: recuperi 1d10 + livello PF." },
    { n: "Azione Impetuosa", type: "Classe", req: "Guerriero", d: "Fai un'azione extra nel turno." },
    { n: "Raffica di Colpi", type: "Classe", req: "Monaco", d: "Spendi 1 Ki per 2 colpi disarmati come bonus action." },
    { n: "Imposizione delle Mani", type: "Classe", req: "Paladino", d: "Pool di cura pari a Livello x 5." },
    { n: "Percepire il Divino", type: "Classe", req: "Paladino", d: "Senti celestiali, immondi o non morti entro 18m." },
    { n: "Punire Divino", type: "Classe", req: "Paladino", d: "Spendi slot per aggiungere 2d8+ danni radiosi." },
    { n: "Attacco Furtivo", type: "Classe", req: "Ladro", d: "Danni extra se hai vantaggio o alleato vicino." },
    { n: "Azione Scaltra", type: "Classe", req: "Ladro", d: "Bonus action per Scattare, Disimpegnarsi o Nascondersi." },
    { n: "Recupero Arcano", type: "Classe", req: "Mago", d: "Recuperi slot incantesimo durante riposo breve." },
    { n: "Fonti di Magia", type: "Classe", req: "Stregone", d: "Converti Punti Stregoneria in slot e viceversa." },
    { n: "Infusione Oggetti", type: "Classe", req: "Artefice", d: "Rendi magici oggetti mondani." },
    { n: "Nemico Prescelto", type: "Classe", req: "Ranger", d: "Vantaggio a seguire tracce e conoscere nemico." },
    { n: "Esploratore Nato", type: "Classe", req: "Ranger", d: "Vantaggi in terreno specifico." },
    
    // TALENTI
    { n: "Fortunato", type: "Talento", req: "Tutti", d: "3 dadi fortuna per ritirare d20." },
    { n: "Tiratore Scelto", type: "Talento", req: "Tutti", d: "Ignora copertura, -5 TxC / +10 Danni a distanza." },
    { n: "Maestro d'Armi Possenti", type: "Talento", req: "Tutti", d: "Critico/Kill dà attacco extra. -5 TxC / +10 Danni mischia." },
    { n: "Sentinella", type: "Talento", req: "Tutti", d: "Colpisci chi disimpegna, riduci velocità a 0." },
    { n: "Osservatore", type: "Talento", req: "Tutti", d: "+5 a Percezione e Indagare passivi." },
    { n: "Attore", type: "Talento", req: "Tutti", d: "Vantaggio inganno e performance per fingersi altri." },
    { n: "Iniziato alla Magia", type: "Talento", req: "Tutti", d: "Impari 2 trucchetti e 1 incantesimo di 1° livello." },
    { n: "Resiliente", type: "Talento", req: "Tutti", d: "+1 a una caratteristica e competenza nei TS." },
    { n: "Robusto", type: "Talento", req: "Tutti", d: "+2 PF per ogni livello." },
    { n: "Incantatore da Guerra", type: "Talento", req: "Tutti", d: "Vantaggio su TS Con per concentrazione. Incantesimi come reazione." },
    { n: "Allerta", type: "Talento", req: "Tutti", d: "+5 iniziativa, non puoi essere sorpreso." },
    { n: "Maestro degli Scudi", type: "Talento", req: "Tutti", d: "Spingere come bonus, bonus a TS Des." },
    { n: "Telecinetico", type: "Talento", req: "Tutti", d: "Mano magica invisibile, spingi creatura 1.5m come bonus action (TS Forza)." },
    { n: "Tocco Fatato", type: "Talento", req: "Tutti", d: "+1 Int/Sag/Car, Passo Velato e incantesimo lv1 Ammaliamento/Divinazione." },
    { n: "Tocco d'Ombra", type: "Talento", req: "Tutti", d: "+1 Int/Sag/Car, Invisibilità e incantesimo lv1 Illusione/Necromanzia." }
];