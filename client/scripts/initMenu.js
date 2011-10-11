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

// # This is the starting point of fmk_reports package

// Getting the menu items, for create new menu
// Find "accounting" menu
var accntsMenu = mainwindow.findChild("menu.accnt");
// Find "accounting-financial reports" menu
var reptMenu = mainwindow.findChild("menu.accnt.financialreports");

// This will be a new menu
var fmkReportMenu = new QMenu(qsTr("Fmk reports"), mainwindow);
// Insert menu
accntsMenu.insertMenu(reptMenu.menuAction(), fmkReportMenu);

// Add separator
toolbox.menuInsertSeparator(accntsMenu, reptMenu);

// Add actions for newly created menu...
var subSpecAction = fmkReportMenu.addAction(qsTr("Subanaliticka specifikacija"), mainwindow);
// Add separator
fmkReportMenu.addSeparator();

// opening window "subanSpecif"
function sSubanSpecif()
{
  var wind = toolbox.openWindow("subanSpecif", mainwindow);
};

// add trigger to the subSpecAction
subSpecAction.triggered.connect(sSubanSpecif);

