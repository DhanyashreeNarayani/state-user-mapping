-- Table: public.user_table

-- DROP TABLE IF EXISTS public.user_table;

CREATE TABLE IF NOT EXISTS public.user_table
(
    user_id integer NOT NULL DEFAULT nextval('user_table_user_id_seq'::regclass),
    firstname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    lastname character varying(255) COLLATE pg_catalog."default" NOT NULL,
    location geometry(Point,4326),
    CONSTRAINT user_table_pkey PRIMARY KEY (user_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.user_table
    OWNER to postgres;