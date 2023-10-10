-- Database: geodata

SELECT 'CREATE DATABASE geodata'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'geodata');

GRANT TEMPORARY, CONNECT ON DATABASE geodata TO PUBLIC;

GRANT ALL ON DATABASE geodata TO postgres;

\c geodata;

CREATE EXTENSION postgis;
SELECT postgis_version();

-- Table: public.state

-- DROP TABLE IF EXISTS public.state;

CREATE TABLE IF NOT EXISTS public.state
(
    ogc_fid integer NOT NULL,
    shapeid character varying COLLATE pg_catalog."default",
    type character varying COLLATE pg_catalog."default",
    iso_group character varying COLLATE pg_catalog."default",
    name character varying COLLATE pg_catalog."default",
    admin_level integer,
    wkb_geometry geometry(MultiPolygon,4326),
    CONSTRAINT state_pkey PRIMARY KEY (ogc_fid)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.state
    OWNER to postgres;
-- Index: state_wkb_geometry_geom_idx

-- DROP INDEX IF EXISTS public.state_wkb_geometry_geom_idx;

CREATE INDEX IF NOT EXISTS state_wkb_geometry_geom_idx
    ON public.state USING gist
    (wkb_geometry)
    TABLESPACE pg_default;

-- Table: public.user_table

-- DROP TABLE IF EXISTS public.user_table;

CREATE TABLE IF NOT EXISTS public.user_table
(
    user_id integer NOT NULL,
    firstname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    location geometry(Point,4326),
    CONSTRAINT user_table_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_table
    OWNER to postgres;