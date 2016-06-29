/**
 * Created by vendr on 16.06.2016.
 */

/** Aufruf DataTable aus json-Datei (kleines d, großes T!!!)*/
$("#filme").dataTable({
    /**Aufrufen der Daten für die Tabelle*/
    "ajax" : "filme.json",

    /**Sortierung der 2. Spalte, Absteigend von neuestem zum ältesten ("asc" == aufsteigend)*/
    "order" : [[1, "desc"]],

    /**Anzeige von nur 5 Titeln auf der Seite*/
    "iDisplayLength": 5
});

/** Aufruf Tooltipster*/
$(".tooltip").tooltipster();


/** Aufruf Tooltipster Bild*/
$("#lieblingsfilm").tooltipster({
    content: $("#lieblingsfilmContent").detach()
});