--
-- PostgreSQL database dump
--

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'SQL_ASCII';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;

--
-- Name: test; Type: SCHEMA; Schema: -; Owner: test
--

CREATE SCHEMA test;


ALTER SCHEMA test OWNER TO test;

SET search_path = test, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: test; Type: TABLE; Schema: test; Owner: test; Tablespace: 
--

CREATE TABLE test (
    value text,
    id integer NOT NULL
);


ALTER TABLE test OWNER TO test;

--
-- Name: test_id_seq; Type: SEQUENCE; Schema: test; Owner: test
--

CREATE SEQUENCE test_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test_id_seq OWNER TO test;

--
-- Name: test_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: test
--

ALTER SEQUENCE test_id_seq OWNED BY test.id;


--
-- Name: id; Type: DEFAULT; Schema: test; Owner: test
--

ALTER TABLE ONLY test ALTER COLUMN id SET DEFAULT nextval('test_id_seq'::regclass);


--
-- Name: test_pkey; Type: CONSTRAINT; Schema: test; Owner: test; Tablespace: 
--

ALTER TABLE ONLY test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

