import PropTypes from 'prop-types';

function Item({marca = 'insira a marca', modelo = 'insira o modelo'}){
    return(
    <>
        <li>Marca: {marca} - Modelo: {modelo}</li>
    </>
    )
}

Item.propTypes = {
  marca: PropTypes.string,
  modelo: PropTypes.string
};

export default Item;