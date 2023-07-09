import styled from "@emotion/styled"

const DivResultado = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    
    align-items: center;
    gap: 10px;
    margin-top: 30px;
`
const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img `
    display: block;
    width: 130px;
`

const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
    return (
        <DivResultado>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
        </DivResultado>
    )
}

export default Resultado