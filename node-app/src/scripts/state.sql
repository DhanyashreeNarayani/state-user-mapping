-- Table: public.state

-- DROP TABLE IF EXISTS public.state;

CREATE TABLE IF NOT EXISTS public.state
(
    ogc_fid integer NOT NULL DEFAULT nextval('state_ogc_fid_seq'::regclass),
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