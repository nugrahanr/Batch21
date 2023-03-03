--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: countries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.countries (
    country_id character(2) NOT NULL,
    country_name character varying(40) DEFAULT NULL::character varying,
    region_id integer NOT NULL
);


ALTER TABLE public.countries OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.countries_country_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_country_id_seq OWNER TO postgres;

--
-- Name: countries_country_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.countries_country_id_seq OWNED BY public.countries.country_id;


--
-- Name: departments; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.departments (
    department_id integer NOT NULL,
    department_name character varying(30),
    manager_id integer,
    location_id integer NOT NULL
);


ALTER TABLE public.departments OWNER TO postgres;

--
-- Name: departments_department_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.departments_department_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.departments_department_id_seq OWNER TO postgres;

--
-- Name: departments_department_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.departments_department_id_seq OWNED BY public.departments.department_id;


--
-- Name: employees; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employees (
    employee_id integer NOT NULL,
    first_name character varying(20),
    last_name character varying(25),
    email character varying(25),
    phone_number character varying(20),
    hire_date timestamp without time zone,
    salary numeric(8,2),
    commission_pct numeric(8,2),
    job_id character varying(15) NOT NULL,
    department_id integer,
    manager_id integer
);


ALTER TABLE public.employees OWNER TO postgres;

--
-- Name: employees_employee_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.employees_employee_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.employees_employee_id_seq OWNER TO postgres;

--
-- Name: employees_employee_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.employees_employee_id_seq OWNED BY public.employees.employee_id;


--
-- Name: job_history; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.job_history (
    employee_id integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone,
    job_id character varying(15),
    department_id integer
);


ALTER TABLE public.job_history OWNER TO postgres;

--
-- Name: jobs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.jobs (
    job_id character varying(15) NOT NULL,
    job_title character varying(35),
    min_salary numeric(8,2),
    max_salary numeric(8,2)
);


ALTER TABLE public.jobs OWNER TO postgres;

--
-- Name: jobs_job_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.jobs_job_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.jobs_job_id_seq OWNER TO postgres;

--
-- Name: jobs_job_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.jobs_job_id_seq OWNED BY public.jobs.job_id;


--
-- Name: locations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.locations (
    location_id integer NOT NULL,
    street_address character varying(40),
    postal_code character varying(12),
    city character varying(30),
    state_province character varying(25),
    country_id character(2) NOT NULL
);


ALTER TABLE public.locations OWNER TO postgres;

--
-- Name: locations_location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.locations_location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.locations_location_id_seq OWNER TO postgres;

--
-- Name: locations_location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.locations_location_id_seq OWNED BY public.locations.location_id;


--
-- Name: regions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regions (
    region_id integer NOT NULL,
    region_name character varying(25) DEFAULT NULL::character varying
);


ALTER TABLE public.regions OWNER TO postgres;

--
-- Name: regions_region_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regions_region_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.regions_region_id_seq OWNER TO postgres;

--
-- Name: regions_region_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regions_region_id_seq OWNED BY public.regions.region_id;


--
-- Name: countries country_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries ALTER COLUMN country_id SET DEFAULT nextval('public.countries_country_id_seq'::regclass);


--
-- Name: departments department_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments ALTER COLUMN department_id SET DEFAULT nextval('public.departments_department_id_seq'::regclass);


--
-- Name: employees employee_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees ALTER COLUMN employee_id SET DEFAULT nextval('public.employees_employee_id_seq'::regclass);


--
-- Name: jobs job_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs ALTER COLUMN job_id SET DEFAULT nextval('public.jobs_job_id_seq'::regclass);


--
-- Name: locations location_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locations ALTER COLUMN location_id SET DEFAULT nextval('public.locations_location_id_seq'::regclass);


--
-- Name: regions region_id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions ALTER COLUMN region_id SET DEFAULT nextval('public.regions_region_id_seq'::regclass);


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.countries (country_id, country_name, region_id) FROM stdin;
AR	Argentina	2
AU	Australia	3
BE	Belgium	1
BR	Brazil	2
CA	Canada	2
CH	Switzerland	1
CN	China	3
DE	Germany	1
DK	Denmark	1
EG	Egypt	4
FR	France	1
IL	Israel	4
IN	India	3
IT	Italy	1
JP	Japan	3
KW	Kuwait	4
ML	Malaysia	3
MX	Mexico	2
NG	Nigeria	4
NL	Netherlands	1
SG	Singapore	3
UK	United Kingdom	1
US	United States of America	2
ZM	Zambia	4
ZW	Zimbabwe	4
\.


--
-- Data for Name: departments; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.departments (department_id, department_name, manager_id, location_id) FROM stdin;
10	Administration	\N	1700
20	Marketing	\N	1800
30	Purchasing	\N	1700
40	Human Resources	\N	2400
50	Shipping	\N	1500
60	IT	\N	1400
70	Public Relations	\N	2700
80	Sales	\N	2500
90	Executive	\N	1700
100	Finance	\N	1700
110	Accounting	\N	1700
120	Treasury	\N	1700
130	Corporate Tax	\N	1700
140	Control And Credit	\N	1700
150	Shareholder Services	\N	1700
160	Benefits	\N	1700
170	Manufacturing	\N	1700
180	Construction	\N	1700
190	Contracting	\N	1700
200	Operations	\N	1700
210	IT Support	\N	1700
220	NOC	\N	1700
230	IT Helpdesk	\N	1700
240	Government Sales	\N	1700
250	Retail Sales	\N	1700
260	Recruiting	\N	1700
270	Payroll	\N	1700
\.


--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employees (employee_id, first_name, last_name, email, phone_number, hire_date, salary, commission_pct, job_id, department_id, manager_id) FROM stdin;
100	Steven	King	SKING	515.123.4567	2003-06-17 00:00:00	24000.00	\N	AD_PRES	90	\N
101	Neena	Kochhar	NKOCHHAR	515.123.4568	2005-09-21 00:00:00	17000.00	\N	AD_VP	90	100
102	Lex	De Haan	LDEHAAN	515.123.4569	2001-01-13 00:00:00	17000.00	\N	AD_VP	90	100
103	Alexander	Hunold	AHUNOLD	590.423.4567	2006-01-03 00:00:00	9000.00	\N	IT_PROG	60	102
104	Bruce	Ernst	BERNST	590.423.4568	2007-05-21 00:00:00	6000.00	\N	IT_PROG	60	103
105	David	Austin	DAUSTIN	590.423.4569	2005-06-25 00:00:00	4800.00	\N	IT_PROG	60	103
106	Valli	Pataballa	VPATABAL	590.423.4560	2006-02-05 00:00:00	4800.00	\N	IT_PROG	60	103
107	Diana	Lorentz	DLORENTZ	590.423.5567	2007-02-07 00:00:00	4200.00	\N	IT_PROG	60	103
108	Nancy	Greenberg	NGREENBE	515.124.4569	2002-08-17 00:00:00	12008.00	\N	FI_MGR	100	101
109	Daniel	Faviet	DFAVIET	515.124.4169	2002-08-16 00:00:00	9000.00	\N	FI_ACCOUNT	100	108
110	John	Chen	JCHEN	515.124.4269	2005-09-28 00:00:00	8200.00	\N	FI_ACCOUNT	100	108
111	Ismael	Sciarra	ISCIARRA	515.124.4369	2005-09-30 00:00:00	7700.00	\N	FI_ACCOUNT	100	108
112	Jose Manuel	Urman	JMURMAN	515.124.4469	2006-03-07 00:00:00	7800.00	\N	FI_ACCOUNT	100	108
113	Luis	Popp	LPOPP	515.124.4567	2007-12-07 00:00:00	6900.00	\N	FI_ACCOUNT	100	108
114	Den	Raphaely	DRAPHEAL	515.127.4561	2002-12-07 00:00:00	11000.00	\N	PU_MAN	30	100
115	Alexander	Khoo	AKHOO	515.127.4562	2003-05-18 00:00:00	3100.00	\N	PU_CLERK	30	114
116	Shelli	Baida	SBAIDA	515.127.4563	2005-12-24 00:00:00	2900.00	\N	PU_CLERK	30	114
117	Sigal	Tobias	STOBIAS	515.127.4564	2005-07-24 00:00:00	2800.00	\N	PU_CLERK	30	114
118	Guy	Himuro	GHIMURO	515.127.4565	2006-11-15 00:00:00	2600.00	\N	PU_CLERK	30	114
119	Karen	Colmenares	KCOLMENA	515.127.4566	2007-08-10 00:00:00	2500.00	\N	PU_CLERK	30	114
120	Matthew	Weiss	MWEISS	650.123.1234	2004-07-18 00:00:00	8000.00	\N	ST_MAN	50	100
121	Adam	Fripp	AFRIPP	650.123.2234	2005-04-10 00:00:00	8200.00	\N	ST_MAN	50	100
122	Payam	Kaufling	PKAUFLIN	650.123.3234	2003-05-01 00:00:00	7900.00	\N	ST_MAN	50	100
123	Shanta	Vollman	SVOLLMAN	650.123.4234	2005-10-10 00:00:00	6500.00	\N	ST_MAN	50	100
124	Kevin	Mourgos	KMOURGOS	650.123.5234	2007-11-16 00:00:00	5800.00	\N	ST_MAN	50	100
125	Julia	Nayer	JNAYER	650.124.1214	2005-07-16 00:00:00	3200.00	\N	ST_CLERK	50	120
126	Irene	Mikkilineni	IMIKKILI	650.124.1224	2006-09-28 00:00:00	2700.00	\N	ST_CLERK	50	120
127	James	Landry	JLANDRY	650.124.1334	2007-01-14 00:00:00	2400.00	\N	ST_CLERK	50	120
128	Steven	Markle	SMARKLE	650.124.1434	2008-03-08 00:00:00	2200.00	\N	ST_CLERK	50	120
129	Laura	Bissot	LBISSOT	650.124.5234	2005-08-20 00:00:00	3300.00	\N	ST_CLERK	50	121
130	Mozhe	Atkinson	MATKINSO	650.124.6234	2005-10-30 00:00:00	2800.00	\N	ST_CLERK	50	121
131	James	Marlow	JAMRLOW	650.124.7234	2005-02-16 00:00:00	2500.00	\N	ST_CLERK	50	121
132	TJ	Olson	TJOLSON	650.124.8234	2007-04-10 00:00:00	2100.00	\N	ST_CLERK	50	121
133	Jason	Mallin	JMALLIN	650.127.1934	2004-06-14 00:00:00	3300.00	\N	ST_CLERK	50	122
134	Michael	Rogers	MROGERS	650.127.1834	2006-08-26 00:00:00	2900.00	\N	ST_CLERK	50	122
135	Ki	Gee	KGEE	650.127.1734	2007-12-12 00:00:00	2400.00	\N	ST_CLERK	50	122
136	Hazel	Philtanker	HPHILTAN	650.127.1634	2008-02-06 00:00:00	2200.00	\N	ST_CLERK	50	122
137	Renske	Ladwig	RLADWIG	650.121.1234	2003-07-14 00:00:00	3600.00	\N	ST_CLERK	50	123
138	Stephen	Stiles	SSTILES	650.121.2034	2005-10-26 00:00:00	3200.00	\N	ST_CLERK	50	123
139	John	Seo	JSEO	650.121.2019	2006-02-12 00:00:00	2700.00	\N	ST_CLERK	50	123
140	Joshua	Patel	JPATEL	650.121.1834	2006-04-06 00:00:00	2500.00	\N	ST_CLERK	50	123
141	Trenna	Rajs	TRAJS	650.121.8009	2003-10-17 00:00:00	3500.00	\N	ST_CLERK	50	124
142	Curtis	Davies	CDAVIES	650.121.2994	2005-01-29 00:00:00	3100.00	\N	ST_CLERK	50	124
143	Randall	Matos	RMATOS	650.121.2874	2006-03-15 00:00:00	2600.00	\N	ST_CLERK	50	124
144	Peter	Vargas	PVARGAS	650.121.2004	2006-07-09 00:00:00	2500.00	\N	ST_CLERK	50	124
145	John	Russell	JRUSSEL	011.44.1344.429268	2004-10-01 00:00:00	14000.00	0.40	SA_MAN	80	100
146	Karen	Partners	KPARTNER	011.44.1344.467268	2005-01-05 00:00:00	13500.00	0.30	SA_MAN	80	100
147	Alberto	Errazuriz	AERRAZUR	011.44.1344.429278	2005-03-10 00:00:00	12000.00	0.30	SA_MAN	80	100
148	Gerald	Cambrault	GCAMBRAU	011.44.1344.619268	2007-10-15 00:00:00	11000.00	0.30	SA_MAN	80	100
149	Eleni	Zlotkey	EZLOTKEY	011.44.1344.429018	2008-01-29 00:00:00	10500.00	0.20	SA_MAN	80	100
150	Peter	Tucker	PTUCKER	011.44.1344.129268	2005-01-30 00:00:00	10000.00	0.30	SA_REP	80	145
151	David	Bernstein	DBERNSTE	011.44.1344.345268	2005-03-24 00:00:00	9500.00	0.25	SA_REP	80	145
152	Peter	Hall	PHALL	011.44.1344.478968	2005-08-20 00:00:00	9000.00	0.25	SA_REP	80	145
153	Christopher	Olsen	COLSEN	011.44.1344.498718	2006-03-30 00:00:00	8000.00	0.20	SA_REP	80	145
154	Nanette	Cambrault	NCAMBRAU	011.44.1344.987668	2006-12-09 00:00:00	7500.00	0.20	SA_REP	80	145
155	Oliver	Tuvault	OTUVAULT	011.44.1344.486508	2007-11-23 00:00:00	7000.00	0.15	SA_REP	80	145
156	Janette	King	JKING	011.44.1345.429268	2004-01-30 00:00:00	10000.00	0.35	SA_REP	80	146
157	Patrick	Sully	PSULLY	011.44.1345.929268	2004-03-04 00:00:00	9500.00	0.35	SA_REP	80	146
158	Allan	McEwen	AMCEWEN	011.44.1345.829268	2004-08-01 00:00:00	9000.00	0.35	SA_REP	80	146
159	Lindsey	Smith	LSMITH	011.44.1345.729268	2005-03-10 00:00:00	8000.00	0.30	SA_REP	80	146
160	Louise	Doran	LDORAN	011.44.1345.629268	2005-12-15 00:00:00	7500.00	0.30	SA_REP	80	146
161	Sarath	Sewall	SSEWALL	011.44.1345.529268	2006-11-03 00:00:00	7000.00	0.25	SA_REP	80	146
162	Clara	Vishney	CVISHNEY	011.44.1346.129268	2005-11-11 00:00:00	10500.00	0.25	SA_REP	80	147
163	Danielle	Greene	DGREENE	011.44.1346.229268	2007-03-19 00:00:00	9500.00	0.15	SA_REP	80	147
164	Mattea	Marvins	MMARVINS	011.44.1346.329268	2008-01-24 00:00:00	7200.00	0.10	SA_REP	80	147
165	David	Lee	DLEE	011.44.1346.529268	2008-02-23 00:00:00	6800.00	0.10	SA_REP	80	147
166	Sundar	Ande	SANDE	011.44.1346.629268	2008-03-24 00:00:00	6400.00	0.10	SA_REP	80	147
167	Amit	Banda	ABANDA	011.44.1346.729268	2008-04-21 00:00:00	6200.00	0.10	SA_REP	80	147
168	Lisa	Ozer	LOZER	011.44.1343.929268	2005-03-11 00:00:00	11500.00	0.25	SA_REP	80	148
169	Harrison	Bloom	HBLOOM	011.44.1343.829268	2006-03-23 00:00:00	10000.00	0.20	SA_REP	80	148
170	Tayler	Fox	TFOX	011.44.1343.729268	2006-01-24 00:00:00	9600.00	0.20	SA_REP	80	148
171	William	Smith	WSMITH	011.44.1343.629268	2007-02-23 00:00:00	7400.00	0.15	SA_REP	80	148
172	Elizabeth	Bates	EBATES	011.44.1343.529268	2007-03-24 00:00:00	7300.00	0.15	SA_REP	80	148
173	Sundita	Kumar	SKUMAR	011.44.1343.329268	2008-04-21 00:00:00	6100.00	0.10	SA_REP	80	148
174	Ellen	Abel	EABEL	011.44.1644.429267	2004-05-11 00:00:00	11000.00	0.30	SA_REP	80	149
175	Alyssa	Hutton	AHUTTON	011.44.1644.429266	2005-03-19 00:00:00	8800.00	0.25	SA_REP	80	149
176	Jonathon	Taylor	JTAYLOR	011.44.1644.429265	2006-03-24 00:00:00	8600.00	0.20	SA_REP	80	149
177	Jack	Livingston	JLIVINGS	011.44.1644.429264	2006-04-23 00:00:00	8400.00	0.20	SA_REP	80	149
178	Kimberely	Grant	KGRANT	011.44.1644.429263	2007-05-24 00:00:00	7000.00	0.15	SA_REP	\N	149
179	Charles	Johnson	CJOHNSON	011.44.1644.429262	2008-01-04 00:00:00	6200.00	0.10	SA_REP	80	149
180	Winston	Taylor	WTAYLOR	650.507.9876	2006-01-24 00:00:00	3200.00	\N	SH_CLERK	50	120
181	Jean	Fleaur	JFLEAUR	650.507.9877	2006-02-23 00:00:00	3100.00	\N	SH_CLERK	50	120
182	Martha	Sullivan	MSULLIVA	650.507.9878	2007-06-21 00:00:00	2500.00	\N	SH_CLERK	50	120
183	Girard	Geoni	GGEONI	650.507.9879	2008-02-03 00:00:00	2800.00	\N	SH_CLERK	50	120
184	Nandita	Sarchand	NSARCHAN	650.509.1876	2004-01-27 00:00:00	4200.00	\N	SH_CLERK	50	121
185	Alexis	Bull	ABULL	650.509.2876	2005-02-20 00:00:00	4100.00	\N	SH_CLERK	50	121
186	Julia	Dellinger	JDELLING	650.509.3876	2006-06-24 00:00:00	3400.00	\N	SH_CLERK	50	121
187	Anthony	Cabrio	ACABRIO	650.509.4876	2007-02-07 00:00:00	3000.00	\N	SH_CLERK	50	121
188	Kelly	Chung	KCHUNG	650.505.1876	2005-06-14 00:00:00	3800.00	\N	SH_CLERK	50	122
189	Jennifer	Dilly	JDILLY	650.505.2876	2005-08-13 00:00:00	3600.00	\N	SH_CLERK	50	122
190	Timothy	Gates	TGATES	650.505.3876	2006-07-11 00:00:00	2900.00	\N	SH_CLERK	50	122
191	Randall	Perkins	RPERKINS	650.505.4876	2007-12-19 00:00:00	2500.00	\N	SH_CLERK	50	122
192	Sarah	Bell	SBELL	650.501.1876	2004-02-04 00:00:00	4000.00	\N	SH_CLERK	50	123
193	Britney	Everett	BEVERETT	650.501.2876	2005-03-03 00:00:00	3900.00	\N	SH_CLERK	50	123
194	Samuel	McCain	SMCCAIN	650.501.3876	2006-07-01 00:00:00	3200.00	\N	SH_CLERK	50	123
195	Vance	Jones	VJONES	650.501.4876	2007-03-17 00:00:00	2800.00	\N	SH_CLERK	50	123
196	Alana	Walsh	AWALSH	650.507.9811	2006-04-24 00:00:00	3100.00	\N	SH_CLERK	50	124
197	Kevin	Feeney	KFEENEY	650.507.9822	2006-05-23 00:00:00	3000.00	\N	SH_CLERK	50	124
198	Donald	OConnell	DOCONNEL	650.507.9833	2007-06-21 00:00:00	2600.00	\N	SH_CLERK	50	124
199	Douglas	Grant	DGRANT	650.507.9844	2008-01-13 00:00:00	2600.00	\N	SH_CLERK	50	124
200	Jennifer	Whalen	JWHALEN	515.123.4444	2003-09-17 00:00:00	4400.00	\N	AD_ASST	10	101
201	Michael	Hartstein	MHARTSTE	515.123.5555	2004-02-17 00:00:00	13000.00	\N	MK_MAN	20	100
202	Pat	Fay	PFAY	603.123.6666	2005-08-17 00:00:00	6000.00	\N	MK_REP	20	201
203	Susan	Mavris	SMAVRIS	515.123.7777	2002-06-07 00:00:00	6500.00	\N	HR_REP	40	101
204	Hermann	Baer	HBAER	515.123.8888	2002-06-07 00:00:00	10000.00	\N	PR_REP	70	101
205	Shelley	Higgins	SHIGGINS	515.123.8080	2002-06-07 00:00:00	12008.00	\N	AC_MGR	110	101
206	William	Gietz	WGIETZ	515.123.8181	2002-06-07 00:00:00	8300.00	\N	AC_ACCOUNT	110	205
\.


--
-- Data for Name: job_history; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.job_history (employee_id, start_date, end_date, job_id, department_id) FROM stdin;
102	2001-01-13 00:00:00	2006-07-24 00:00:00	IT_PROG	60
101	1997-09-21 00:00:00	2001-10-27 00:00:00	AC_ACCOUNT	110
101	2001-10-28 00:00:00	2005-03-15 00:00:00	AC_MGR	110
201	2004-02-17 00:00:00	2007-12-19 00:00:00	MK_REP	20
114	2006-03-24 00:00:00	2007-12-31 00:00:00	ST_CLERK	50
122	2007-01-01 00:00:00	2007-12-31 00:00:00	ST_CLERK	50
200	1995-09-17 00:00:00	2001-06-17 00:00:00	AD_ASST	90
176	2006-03-24 00:00:00	2006-12-31 00:00:00	SA_REP	80
176	2007-01-01 00:00:00	2007-12-31 00:00:00	SA_MAN	80
200	2002-07-01 00:00:00	2006-12-31 00:00:00	AC_ACCOUNT	90
\.


--
-- Data for Name: jobs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.jobs (job_id, job_title, min_salary, max_salary) FROM stdin;
AD_PRES	President	20080.00	40000.00
AD_VP	Administration Vice President	15000.00	30000.00
AD_ASST	Administration Assistant	3000.00	6000.00
FI_MGR	Finance Manager	8200.00	16000.00
FI_ACCOUNT	Accountant	4200.00	9000.00
AC_MGR	Accounting Manager	8200.00	16000.00
AC_ACCOUNT	Public Accountant	4200.00	9000.00
SA_MAN	Sales Manager	10000.00	20080.00
SA_REP	Sales Representative	6000.00	12008.00
PU_MAN	Purchasing Manager	8000.00	15000.00
PU_CLERK	Purchasing Clerk	2500.00	5500.00
ST_MAN	Stock Manager	5500.00	8500.00
ST_CLERK	Stock Clerk	2008.00	5000.00
SH_CLERK	Shipping Clerk	2500.00	5500.00
IT_PROG	Programmer	4000.00	10000.00
MK_MAN	Marketing Manager	9000.00	15000.00
MK_REP	Marketing Representative	4000.00	9000.00
HR_REP	Human Resources Representative	4000.00	9000.00
PR_REP	Public Relations Representative	4500.00	10500.00
\.


--
-- Data for Name: locations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.locations (location_id, street_address, postal_code, city, state_province, country_id) FROM stdin;
1000	1297 Via Cola di Rie	00989	Roma	\N	IT
1100	93091 Calle della Testa	10934	Venice	\N	IT
1200	2017 Shinjuku-ku	1689	Tokyo	Tokyo Prefecture	JP
1300	9450 Kamiya-cho	6823	Hiroshima	\N	JP
1400	2014 Jabberwocky Rd	26192	Southlake	Texas	US
1500	2011 Interiors Blvd	99236	South San Francisco	California	US
1600	2007 Zagora St	50090	South Brunswick	New Jersey	US
1700	2004 Charade Rd	98199	Seattle	Washington	US
1800	147 Spadina Ave	M5V 2L7	Toronto	Ontario	CA
1900	6092 Boxwood St	YSW 9T2	Whitehorse	Yukon	CA
2000	40-5-12 Laogianggen	190518	Beijing	\N	CN
2100	1298 Vileparle (E)	490231	Bombay	Maharashtra	IN
2200	12-98 Victoria Street	2901	Sydney	New South Wales	AU
2300	198 Clementi North	540198	Singapore	\N	SG
2400	8204 Arthur St	\N	London	\N	UK
2500	Magdalen Centre, The Oxford Science Park	OX9 9ZB	Oxford	Oxford	UK
2600	9702 Chester Road	09629850293	Stretford	Manchester	UK
2700	Schwanthalerstr. 7031	80925	Munich	Bavaria	DE
2800	Rua Frei Caneca 1360 	01307-002	Sao Paulo	Sao Paulo	BR
2900	20 Rue des Corps-Saints	1730	Geneva	Geneve	CH
3000	Murtenstrasse 921	3095	Bern	BE	CH
3100	Pieter Breughelstraat 837	3029SK	Utrecht	Utrecht	NL
3200	Mariano Escobedo 9991	11932	Mexico City	Distrito Federal,	MX
\.


--
-- Data for Name: regions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.regions (region_id, region_name) FROM stdin;
1	Europe
2	Americas
3	Asia
4	Middle East and Africa
\.


--
-- Name: countries_country_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.countries_country_id_seq', 1, false);


--
-- Name: departments_department_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.departments_department_id_seq', 1, false);


--
-- Name: employees_employee_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.employees_employee_id_seq', 1, false);


--
-- Name: jobs_job_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.jobs_job_id_seq', 1, false);


--
-- Name: locations_location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.locations_location_id_seq', 1, false);


--
-- Name: regions_region_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.regions_region_id_seq', 1, false);


--
-- Name: countries countries_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_pkey PRIMARY KEY (country_id);


--
-- Name: departments departments_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_pkey PRIMARY KEY (department_id);


--
-- Name: employees employees_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_pkey PRIMARY KEY (employee_id);


--
-- Name: job_history job_history_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_history
    ADD CONSTRAINT job_history_pkey PRIMARY KEY (employee_id, start_date);


--
-- Name: jobs jobs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.jobs
    ADD CONSTRAINT jobs_pkey PRIMARY KEY (job_id);


--
-- Name: locations locations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (location_id);


--
-- Name: regions regions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regions
    ADD CONSTRAINT regions_pkey PRIMARY KEY (region_id);


--
-- Name: countries countries_region_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_region_id_fkey FOREIGN KEY (region_id) REFERENCES public.regions(region_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: departments departments_location_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.departments
    ADD CONSTRAINT departments_location_id_fkey FOREIGN KEY (location_id) REFERENCES public.locations(location_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: employees employees_department_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.departments(department_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: employees employees_job_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employees
    ADD CONSTRAINT employees_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: job_history job_history_department_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_history
    ADD CONSTRAINT job_history_department_id_fkey FOREIGN KEY (department_id) REFERENCES public.departments(department_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: job_history job_history_employee_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_history
    ADD CONSTRAINT job_history_employee_id_fkey FOREIGN KEY (employee_id) REFERENCES public.employees(employee_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: job_history job_history_job_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.job_history
    ADD CONSTRAINT job_history_job_id_fkey FOREIGN KEY (job_id) REFERENCES public.jobs(job_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: locations locations_country_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_country_id_fkey FOREIGN KEY (country_id) REFERENCES public.countries(country_id) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

