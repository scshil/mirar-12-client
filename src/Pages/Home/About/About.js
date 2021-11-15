import React from "react";
import { Col, Row, Container, Image } from "react-bootstrap";
import { useForm } from "react-hook-form";
import watch1 from "../../../pic/watch1.jpg";
import watch2 from "../../../pic/watch7.png";
import watch3 from "../../../pic/watch3.jpg";
import watch4 from "../../../pic/watch4.png";
import watch5 from "../../../pic/watch5.jpg";
import watch6 from "../../../pic/watch6.jpg";
import "./About.css";
const About = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="min-vh-100 ">
      <div className="about-bannar d-flex justify-content-center align-items-center mb-5">
        <h1 className="text">Mirar </h1>
      </div>
      <Container className="my-3">
        <Row>
          {/* about */}
          <Col xs={12} sm={12} md={7} lg={6}>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              recusandae molestias quaerat rem, incidunt nam corrupti ipsam
              cumque suscipit facere explicabo temporibus modi nihil omnis nemo
              distinctio sequi earum laudantium dolore deleniti sit neque? Culpa
              consequatur sed, eum ad provident maiores sapiente cumque,
              voluptate quaerat obcaecati voluptatum magnam, id excepturi
              ratione accusamus laboriosam. Tempore iste sed rem dignissimos
              eius error maiores ipsum quae aperiam laudantium laborum tempora
              accusamus dolore ab officiis aliquid, odio recusandae nihil. Et
              eligendi, quis obcaecati ut totam neque rem vitae accusantium,
              dicta est, culpa aspernatur! Et unde distinctio ipsa voluptates
              voluptate enim aperiam nesciunt. Perferendis, laboriosam?
            </p>
          </Col>
          {/* qua */}
          <Col xs={12} sm={12} md={5} lg={6}>
            <p>companies we deal with</p>
            <Row className="mb-5">
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch1} fluid />
                </a>
              </Col>
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch2} fluid />
                </a>
              </Col>
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch3} fluid />
                </a>
              </Col>
            </Row>
            <Row className="mt-5">
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch4} fluid />
                </a>
              </Col>
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch6} fluid />
                </a>
              </Col>
              <Col>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <Image src={watch5} fluid />
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <h1>contact us</h1>
        <Row className="d-flex justify-content-center align-items-center">
          {/* about */}
          <Col xs={12} sm={12} md={7} lg={6}>
            <form className="contact" onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name")} placeholder="Name" />

              <input {...register("name")} placeholder="Email" />

              <textarea {...register("message")} placeholder="Message" />

              <input type="submit" value="Contact" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
