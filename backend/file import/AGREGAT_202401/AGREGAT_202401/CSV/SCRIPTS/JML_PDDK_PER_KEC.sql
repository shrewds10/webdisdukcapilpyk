WITH DATA AS (SELECT KODE, WILAYAH, L, P, JML FROM AGR_JK_VERT
WHERE KODE LIKE '13.76.02%'
) 
SELECT * FROM DATA