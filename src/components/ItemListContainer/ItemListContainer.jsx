  import { useState, useContext, useEffect } from "react";
  import { Container, Row, Col } from "react-bootstrap";
  import './itemListContainer.css';
  import Loader from'../Loader/Loader'
  import ItemList from '../ItemList/ItemList';
  import Paginator from '../Paginator/Paginator'
  import { useParams } from "react-router-dom";
import { ProductContext } from "../../contexts/ProductContext";

  const ItemListContainer = ({ props }) => {
    const {products, getProductsByCategory} = useContext(ProductContext);
    const [productsFilter, setProductsFilter] = useState([])
    const [loader, setLoader] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const {categoryId} = useParams();

    useEffect(() => {
      const fetchData = async () => {
        try {
          if (categoryId) {
            const filteredProducts = await getProductsByCategory(categoryId);
            setProductsFilter(filteredProducts);
          } else {
            setProductsFilter(products);
          }
          setLoader(false);
        } catch (error) {
          console.log("Error fetching data", error);
        }
      };
      fetchData();
    }, [categoryId, getProductsByCategory, products]);

    useEffect(() => {
      setCurrentPage(1);
    }, [categoryId]);



    const handlePageChange = (page) => {
      setCurrentPage(page);
    };

    const totalPages = Math.ceil(productsFilter?.length / itemsPerPage);

    const filteredProducts = productsFilter?.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <Container fluid className="main">
        {
          loader?(
            <Row className="justify-content-center">
            <Col xs={12} className="text-center pt-2">
              <Loader />
              <p>Cargando nuestros productos ...</p>
            </Col>
            </Row>
          ):(
            <Row className="justify-content-center">
            <Col xs={12} className="text-center pt-2">
              <h1>{props}</h1>
            </Col>
            <Col xs={12} className="pt-2">
              <ItemList props={filteredProducts} />
            </Col>
            <Col xs={12} className="text-center">
              <Paginator
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </Col>
          </Row>
          )
        }
      </Container>
    );
  };

  export default ItemListContainer;
