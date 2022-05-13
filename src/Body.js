import React from 'react';
import './static/Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";
import img5 from "./images/5.jpg";
import ImgGallery from './ImgGallery';
import Footer from './Footer';

const icon = <FontAwesomeIcon icon={faHourglassStart} color="rgb(93,197,101)"/>

function Body() {
  return (
    <div className="container mt-5 body">
        <div className="containerBody d-flex justify-content-around">
            <div className="left col-md-3 col-xs-12">
                <div className="services">
                    <ul className="list-group">
                        <li className="list-group-item other">
                            <p>Other Services</p>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Clipping Path</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Ghost Retouching</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Image Masking</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">hadow Creation</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Image Manipulation</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                        <a className="listLinks" href='#'>{icon}
                            <span className="listData">Background Removal</span>
                            </a>
                        </li>
                        
                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Photo Retouching</span>
                            </a>
                        </li>
                        
                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Color Correction</span>
                            </a>
                        </li>
                        
                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">E-commerce Image Editing</span>
                            </a>
                        </li>

                        <li className="list-group-item">
                            <a className="listLinks" href='#'>{icon}
                            <span className="listData">Clipping Path</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="right col-md-9 col-xs-12">
                <div className="clipping">
                    <div className="heading">
                        <h1>Clipping Path Service</h1>
                    </div>

                    <div className="description">
                        <p>The Adobe Photoshop is the best and maximum used image editing software in the whole world. Many people use it every day for the different purpose. Mainly they are graphic designers, photo editors, animators, and so forth. You can find some different professionals who use this fantastic software.</p>
                    </div>

                    <div className="img">
<ImgGallery />
                    </div>

                    <div className="desc d-flex justify-content-around">

                        <div className="descLeft right col-md-6 col-xs-6">
                            <div className="heading">
                                <h1>Why Choose Us?</h1>
                            </div>
                            <div className="sh-heading">
                                <h3>We are responsible</h3>
                            </div>
                            <p className="descLeftdata">Mauris volutpat nulla a enim efficitur elementum porior at diam aliquam et elit elementum, ferdmentum nisl sed, pellentesque mares. Integer blandit erat bisendum pulvi.</p>

                            <div className="sh-heading">
                                <h3>99% of our clients are satisfied</h3>
                            </div>
                            <p className="descLeftdata">Nulla vitae dui et velit sagtis fermentum. Donec rhonus tincidun. Nullam nibh tellus, blandit vel leo ant vulputate, commodo elementum. Pellentesque eget quam ultrices.</p>
                        
                            <div className="sh-heading">
                                <h3>We have reasonable prices</h3>
                            </div>
                            <p className="descLeftdata">Ut ligula sem, eleifend sed pellentesque nec, viverra ut igula sit amet ipsum porttitor aliqum pulvinar quis dor Ielit placerat, finius velit vel, dignissim semuis sed dignis.</p>
                        </div>

                        <div className="descRight col-md-6">
                            <div className="heading">
                                <h1>The Benefits</h1>
                            </div>
                            <div className="description">
                                <p>We could discuss today clipping paths benefits. It means clipping cut, as well as path, means way or else. For the marketing campaign is a new particularly useful if you are organized. Background image or photo hit the clipping path emblematic process. Pen tool object specifies the persecution create a substitute as well as do all you require. Background images using a lot of clipping to knock saying someone needs to found the posting. why can’t use the selection tool background from the first place? several suppliers are as well clipping path service providing high excellence services.</p>
                            </div>
                        </div>
                    </div>

                    <div className="descBody mt-4">
                        <div className="description">
                            <p>Actually, they use it frequently in their daily life. Anyone who uses the software will see a lot of tools in it. Every single option is handy for an image related work. Photoshop Pen tool is one of the maximum used options in the software. Clipping path is mainly done by this pen tool. This option works as an image background removal method. The pen tool can remove, cut out, modify or substitute the unsuitable background of a picture. It can replace the background with your desired one. Many photographers use it for changing their image background. In this article, you will see some basic things to select clipping path service.</p>
                        </div>

                                           
                        <div className="descBodyImg">
                            <img src={img5} alt="Img5" className="descimg"/>
                        </div>

                        <div className="heading">
                            <h1>Best clipping path service</h1>
                        </div>

                        <div className="description">
                            <p>Clipping path service plays a vital role in any image processing. This kind of service is conducive to supply the best and eye-catching photo editing service. Any pictures have an active character to attract the viewers. An outstanding photograph can tell a great story without any word. However, all the images do not have those qualities. Only a few models can catch the audience attention. To get it the image must have to be perfect. To do this, you will need the best clipping path service. Only the best clipping path service can offer the requirements of all clients. You can have many customers in online for an excellent photo. They have a huge demand for any online business. So every buyer must have to try their best to choose the Best clipping path service. Moreover, that is why we are here.</p>
                        </div>

                        <div className="descBodyImg">
                            <img src={img4} alt="img4" className="descimg" />
                        </div>
                        
                        <div className="heading">
                            <h1>Function of Clipping Path Service</h1>
                        </div>

                        <div className="description">
                            <p>Different types of clients use clipping path service. In this world of graphic design, you need to use images for various purposes. In the case of serving a severe and sensitive purpose, you need to use the perfect picture. Here comes the necessity of Clipping path service. Let’s consider an e-commerce website. Here you can find thousands of images instead of any real product. Here, the image is taking the place of actual product in this case. Customers have to choose the products by observing the images. You cannot think of web image optimization without Clipping path service. There is hundreds of other image clipping service. They have users like printing and publication industry. They include magazine.</p>
                        </div>

                        <div className="heading">
                            <h1>How to Get Along with the best clipping path service?</h1>
                        </div>

                        <div className="clippingPath">
                            <span>Proper specialist Knowledge:</span>Proper specialist Knowledge: The Company must use professional clipping path service for your picture. It can create an image best looking and attractive. Usually, greatest snapped images have many problems that need to clean or retouch. Images can have wrong figures around it. It can have a sharp shadow which damages the photograph excellence. That is why expert photo editor should have the proper practical knowledge. They should know to change the image background. They can fix the clients issue to create the picture with stunning looking. To test the capability of clipping path service provider companies you can get a free trial service. You should select a more sophisticated image to the clipping service for the free trial. By this test, you can justify their work quality and skill.
                            <span>Client Review:</span>Client Review: Previous clients report is the most important point to check out. It contains the company work quality and proficiency. If the company has an excellent and positive review with some big happy clients, you can test them for a free trial. You have only to hire them to depend on your free trial outcome. Maximum service providers are not similarly professional in any complex field. Some of them will give poor quality picture clipping path service. Some will need very expert on removing image background. So you need to test their specialist sector.
                            <span>Working technique:</span>Working technique: The working method will never match with all other company. Different company’s operation plan will look different. One can remove image background by using the tool of a magic wand. All these are very natural and shared ways to remove image background. However, by these regular methods do not guarantee incredible desire and greatest upshot. Because these methods are not everlasting and normally applied for only temporary workspaces.
                        </div>

                        <div className="descBodyImg">
                            <img src={img2} alt="img2" className="descimg" />
                        </div>

                        <div className="clippingPath">
                            <span>Software:</span>Software: You must use Photoshop pen tool service to select or extract your images. It is useful to have a good outcome from your liked clipping path service provider company. The pen tool is the only one greatest tool to cut-out your picture background. All expert and professional clipping path service provider companies are using the Photoshop pen tool. They use this service to clip or edit images. This method is specialized and effortless to navigate. However, always need to be skilled hand to obtain the best result.
                            <span>Expert Designer:</span>Expert Designer: After that, you need to make sure about the company’s expert designer number. Because the fast and better outcome depends on the skilled hand. If one company has only one or two designers, then this company will not be able to serve you. They cannot offer any work time according to any client’s requirements. So check this issue before hiring a professional clipping path service company.
                            <span>Quality control panel:</span>Quality control panel: Have any quality control group in this endeavor? This is a great essential question. Because in professional clipping path service company has quality assurance team.  It ensures client work or service quality
                        </div>

                        <div className="descBodyImg">
                            <img src={img1} alt="img1" className="descimg" />
                        </div>

                        <div className="heading">
                            <h1>Conclusion</h1>
                        </div>

                        <div className="description">
                            <p>Different clipping path techniques need different budgets. You have to choose a particular clipping path service according to your need.  The main thing is to get an expert graphic design company or professional.  They can give you the greatest quality service within a reasonable price. A company can have those above criteria. It is called the best for you. This Photoshop clipping path Service Company should be selected for you. You have to choose a specific budget for it. So you have to consider the using pen tool for clipping path, then meet the exact deadline, quality of work all reasons. It needs to consider choosing a photo editing service providers.</p>
                        </div>
                    </div>
 
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
export default Body