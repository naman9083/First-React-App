export default function About(props) {
//   const [myStyle, setMyStyle] = useState({
//     color: "black",
//     backgroundColor: "white",
//   })
    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',
        
    }
//   const [btnText, setBtnText] = useState("Enable Dark Mode");

//   const toggleStyle = () => {
//     if (myStyle.color === "black") {
//       setMyStyle({
//         color: "white",
//         backgroundColor: "black",
//         border: "1px solid white",
//       });
//       setBtnText("Enable Light Mode");
//     } else {
//       setMyStyle({
//         color: "black",
//         backgroundColor: "white",
//       });
//       setBtnText("Enable Dark Mode");
//     }
//   };
  return (
    <div className="container" >
      <h1 className="my-2" style={{color: props.mode==='dark'?'white':'#042743'  }}>About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong> Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem,
              blanditiis. Magni quibusdam maxime harum consectetur sed et
              fugiat? Repellat quo alias facere dolore sed optio, cum architecto
              recusandae debitis non velit illo molestias mollitia, sit possimus
              nihil tempore quam accusamus eaque sunt sint at quod. Illum,
              aspernatur rem, in iure nihil, excepturi explicabo ab magnam ad
              quam quo eius possimus quibusdam cupiditate perferendis ullam
              facere! Labore distinctio ducimus obcaecati doloremque sit numquam
              dolores ea inventore, exercitationem quia consequatur ad
              voluptatibus quasi iste? Repudiandae quam reiciendis culpa magnam,
              excepturi dignissimos facilis ullam inventore quidem voluptates
              perferendis optio repellendus consequuntur quod hic.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free to Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              reiciendis magnam voluptatem fugiat id similique dolorum natus,
              deleniti optio in, expedita error aperiam numquam doloremque quam,
              quod temporibus enim harum voluptas eveniet iure! Aliquid iste
              harum itaque recusandae incidunt! Esse assumenda libero in
              mollitia veniam, facere quod dicta nulla, porro maxime, omnis
              numquam. Provident eligendi porro earum consequuntur ea ducimus
              fuga sed qui quibusdam asperiores mollitia quos sunt quas quam
              corporis voluptatem quia doloremque, ullam ab animi in officia
              obcaecati?
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptate, eveniet debitis maxime ipsum dolorum repellendus nihil
              ut! Sunt nulla veniam illum sequi, omnis optio cupiditate quia
              fugit vitae voluptate? Animi, quidem doloremque beatae dolore
              perferendis maiores blanditiis quae, necessitatibus, placeat
              molestiae amet culpa molestias ullam perspiciatis consectetur.
              Fugit, repellendus libero!
            </div>
          </div>
        </div>
      </div>
      {/* <button
        className="btn btn-primary my-2"
        type="button"
        onClick={toggleStyle}
      >
        {btnText}{" "}
      </button> */}
    </div>
  );
}
