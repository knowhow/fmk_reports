xtuple paket "fmk_reports"
====================================

Info
----

Ovaj paket se pojavljuje na meniju "Accounting" te dobijamo opciju "Fmk reports"

Dobijamo mogućnost da povučemo izvještaj subanalitičke specifikacije za period i po kontu.

Instalacija
------------

Pakovanje se vrši na sljedeći način: 

   ../x/fmk_reports/package/$ ./make_pkg.sh

Sa updater aplikacijom instalirati u xtuple.

Nakon instalacije novokreirana tabela fin_suban je prazna pa je treba napuniti 
sa 'dbf2pg' komandom i podacima, pogledaj aktivnosti: #24717 i #24708



