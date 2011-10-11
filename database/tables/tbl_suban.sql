CREATE TABLE fmk_reports.fin_suban
(
  idfirma character(2),
  idkonto character(7),
  idpartner character(6),
  idvn character(2),
  brnal character(8),
  rbr character(4),
  idtipdok character(2),
  brdok character(10),
  datdok date,
  datval date,
  otvst character(1),
  d_p character(1),
  iznosbhd numeric(17,2),
  iznosdem numeric(15,2),
  opis character(40),
  k1 character(1),
  k2 character(1),
  k3 character(2),
  k4 character(2),
  m1 character(1),
  m2 character(1),
  brisano character(1),
  idrj character(6),
  funk character(5),
  fond character(4)
);

GRANT ALL ON TABLE fmk_reports.fin_suban TO xtrole;


