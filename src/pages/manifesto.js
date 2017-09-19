import React from "react"
import Container from '../components/container';
import Footer from '../components/footer';
import Header from '../components/header';

export default () => (
  <div>
    <Header />
    <div
      style={{
        marginTop: "20%",
      }}
    >
        <Container>
          <div 
            className="content"
            style={{
              width: "60%",
            }}
          >
            <span
              style={{
                display: "inline-block",
                marginBottom: 37,
              }}
            >
              Tristique Parturient
            </span>
            <h1
            style={{
                marginBottom: 30,
              }}
            >
            How it works
            </h1>
            <p
            style={{
                fontSize: 43,
                lineHeight: 1.23,
                marginBottom: 70,
              }}
            >
            Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis, nascetur ridiculus mus. 
            </p>
            <p
            style={{
                marginBottom: 50,
              }}
            >Maecenas faucibus mollis interdum. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>

            <p
            style={{
                marginBottom: 50,
              }}
            >Sed posuere consectetur est at lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Curabitur blandit tempus porttitor. Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis euismod. Sed posuere consectetur est at lobortis.
            </p>    

            <p
            style={{
                marginBottom: 50,
              }}
            >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum.</p>

            <p
            style={{
                marginBottom: 50,
              }}
            >Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec sed odio dui.</p>
          </div>
        </Container>
        <Footer />
    </div>
  </div>
);
  
