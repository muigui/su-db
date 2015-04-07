--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

SET search_path = test, pg_catalog;

--
-- Data for Name: test; Type: TABLE DATA; Schema: test; Owner: test
--

COPY test (value, id) FROM stdin;
your	1
time	2
is	3
up	4
I	5
no	6
longer	7
want	8
to	9
play	10
for	11
you	12
!	13
\.


--
-- Name: test_id_seq; Type: SEQUENCE SET; Schema: test; Owner: test
--

SELECT pg_catalog.setval('test_id_seq', 13, true);


--
-- PostgreSQL database dump complete
--

