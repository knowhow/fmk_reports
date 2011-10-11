/*
 * This file is part of the knowhow ERP, a free and open source
 * Enterprise Resource Planning software suite,
 * Copyright (c) 2010-2011 by bring.out doo Sarajevo.
 * It is licensed to you under the Common Public Attribution License
 * version 1.0, the full text of which (including knowhow-specific Exhibits)
 * is available in the file LICENSE_CPAL_bring.out_knowhow.md located at the
 * root directory of this source code archive.
 * By using this software, you agree to be bound by its terms.
 */

// # Window "subanReport"
// On this window we enter date's and id konto parameters and generate report "subanaliticka specifikacija"

// Get form controls to the variables...
var _btnCancel = mywindow.findChild("_btnCancel");
var _btnOk = mywindow.findChild("_btnOk");
var _dateFrom = mywindow.findChild("_dateFrom");
var _dateTo = mywindow.findChild("_dateTo");
var _lblStatus = mywindow.findChild("_lblStatus");
var _view = mywindow.findChild("_view");
var _idKonto = mywindow.findChild("_idKonto");

// this now work !?! I don't know why ?
with (_view)
{
   setColumn("Firma",  20, 1, true, "idfirma");
   setColumn("Vrsta naloga",  20, 1, true, "idvn");
   setColumn("Broj naloga",  20, 1, true, "brnal");
   setColumn("Id konto",  40, 1, true, "idkonto");
}

// Add events to the controls...

// btn cancel will close the window
_btnCancel.clicked.connect(mywindow, "close");

// btn ok will generate report, call function generateReport()
_btnOk.clicked.connect(generateReport);


// Generatig "specifikacija" report based on metasql query
// We use subanSpec.xml report, see: /clients/reports/subanSpec.xml
function generateReport() {

    // Create parameters for report
    var params = new Object;
    params.date_from = _dateFrom.date;
    params.date_to = _dateTo.date;

    if (_idKonto.text != '') {
        params.id_konto = _idKonto.text;
    };

    // Create pdf report with params
    toolbox.printReport("getSubanSpec", params);

};


// This function fill data in XTreeWidget which is on this window
function fill_data() {

    // first check for data from fin_suban table
    if (hasData()) {
        _lblStatus.text = "Status: ima zapisa";
    };

    // quering data from table
    var data = toolbox.executeQuery("SELECT idfirma, idvd as idvd, brnal as brnal, idkonto as idkonto FROM xthelloworld.fin_suban LIMIT 10");
    try
    {
        // fill data to _view control
        // but this now work ?!?????
        _view.populate(data);
        toolbox.messageBox("critical", mywindow, mywindow.windowTitle, "populating");
    }
    catch (e)
    {
        print(e);
        toolbox.messageBox("critical", mywindow, mywindow.windowTitle, e);
    };

};


// Check to see it has data in table fin_suban
function hasData()
{
    var cparam = new Object();
    var data = toolbox.executeQuery('SELECT count(*) as count FROM xthelloworld.fin_suban', cparam);
    if (data.first())
    {
        if (data.value("count") > 0)
        {
            return true;
        } else {
            return false;
        }
    }
};

