
import Link from "next/link";
import styles from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <div>
          
        </div>
        <div>
          <div className={styles.heroCTA}>
            <h2>New Arrival</h2>
            <h1>Discover Our <br/>New Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
            <Link className={styles.heroCTABtn} href={'/shop'}>BUY NOW</Link>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.sectionHeaders}>
          <h2>Browse The Range</h2>
          <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className={styles.catCardContainer}>
          <Link href={'/categories/dining'} className={styles.catCard}>
          <div className={styles.catCardCover} style={{ backgroundImage: `url("/category cover/cat cover 1.png")`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}></div>
          <span>Dining</span>
          </Link>

          <Link href={'/categories/living'} className={styles.catCard}>
            <div className={styles.catCardCover} style={{ backgroundImage: `url("/category cover/cat cover 2.png")`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}></div>
            <span>Living</span>
          </Link>

          <Link href={'/categories/bedroom'} className={styles.catCard}>
            <div className={styles.catCardCover} style={{ backgroundImage: `url("/category cover/cat cover 3.png")`, backgroundSize: 'cover', backgroundPosition: 'bottom' }}></div>
            <span>Bedroom</span>
          </Link>
        </div>
      </section>
        
      <section className={styles.productSection}>
        <div className={styles.sectionHeaders}>
          <h2 >Our Products</h2>
        </div>
        
        <div className={styles.productContainer}>


          <div className={styles.productCard}>
            <div className={styles.productCardImgContainer}>
              <div className={styles.productCardStatus}>
                -30%
              </div>
              <Image className={styles.productCardImg} height={500} width={500} alt=""  src={'/product sample Imgs/product 1.png'}/>

              {/* <img src="product sample Imgs/product 1.png"/> */}
            </div>
            <div className={styles.productCardInfo}>
              <h4>Syltherine</h4>
              <p className={styles.productCardDescription}>Stylish cafe chair</p>
              <div className={styles.productCardPrices}>
                <span className={styles.productCardPrice}>Rp 2,500.00</span>
                <span className={styles.productCardDiscountPrice}>Rp 2,000.00</span>
              </div>
            </div>

            <div className={styles.productCardAddToCartContainer}>
              <Link className={styles.productCardAddToCart} href={'#'}>Add to cart</Link>
              <div className={styles.productCardShareLinks}>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-share.svg'}/> Share</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-compare.svg'}/> Compare</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-like.svg'}/> Like</Link>
              </div>
            </div>
          </div>



          <div className={styles.productCard}>
            <div className={styles.productCardImgContainer}>
              <div className={styles.productCardStatus}>
                -30%
              </div>
              <Image className={styles.productCardImg} height={500} width={500} alt=""  src={'/product sample Imgs/product 1.png'}/>

              {/* <img src="product sample Imgs/product 1.png"/> */}
            </div>
            <div className={styles.productCardInfo}>
              <h4>Syltherine</h4>
              <p className={styles.productCardDescription}>Stylish cafe chair</p>
              <div className={styles.productCardPrices}>
                <span className={styles.productCardPrice}>Rp 2,500.00</span>
                <span className={styles.productCardDiscountPrice}>Rp 2,000.00</span>
              </div>
            </div>

            <div className={styles.productCardAddToCartContainer}>
              <Link className={styles.productCardAddToCart} href={'#'}>Add to cart</Link>
              <div className={styles.productCardShareLinks}>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-share.svg'}/> Share</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-compare.svg'}/> Compare</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-like.svg'}/> Like</Link>
              </div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productCardImgContainer}>
              <div className={styles.productCardStatus}>
                -30%
              </div>
              <Image className={styles.productCardImg} height={500} width={500} alt=""  src={'/product sample Imgs/product 1.png'}/>

              {/* <img src="product sample Imgs/product 1.png"/> */}
            </div>
            <div className={styles.productCardInfo}>
              <h4>Syltherine</h4>
              <p className={styles.productCardDescription}>Stylish cafe chair</p>
              <div className={styles.productCardPrices}>
                <span className={styles.productCardPrice}>Rp 2,500.00</span>
                <span className={styles.productCardDiscountPrice}>Rp 2,000.00</span>
              </div>
            </div>

            <div className={styles.productCardAddToCartContainer}>
              <Link className={styles.productCardAddToCart} href={'#'}>Add to cart</Link>
              <div className={styles.productCardShareLinks}>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-share.svg'}/> Share</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-compare.svg'}/> Compare</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-like.svg'}/> Like</Link>
              </div>
            </div>
          </div>

          <div className={styles.productCard}>
            <div className={styles.productCardImgContainer}>
              <div className={styles.productCardStatus}>
                -30%
              </div>
              <Image className={styles.productCardImg} height={500} width={500} alt=""  src={'/product sample Imgs/product 1.png'}/>

              {/* <img src="product sample Imgs/product 1.png"/> */}
            </div>
            <div className={styles.productCardInfo}>
              <h4>Syltherine</h4>
              <p className={styles.productCardDescription}>Stylish cafe chair</p>
              <div className={styles.productCardPrices}>
                <span className={styles.productCardPrice}>Rp 2,500.00</span>
                <span className={styles.productCardDiscountPrice}>Rp 2,000.00</span>
              </div>
            </div>

            <div className={styles.productCardAddToCartContainer}>
              <Link className={styles.productCardAddToCart} href={'#'}>Add to cart</Link>
              <div className={styles.productCardShareLinks}>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-share.svg'}/> Share</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-compare.svg'}/> Compare</Link>
                <Link className={styles.productCardShareLink} href={'#'}><Image alt="" width={50} height={50} src={'/icons/icon-like.svg'}/> Like</Link>
              </div>
            </div>
          </div>


          

          

        </div>

        <div className="revealBtnContainer" >
        <Link className="revealBtn" href={'#'}>Show More</Link>
        </div>

      </section>

      <section className={styles.inspoSection}>

        <div className={styles.inspoContainer}>
          <div className={styles.inspoHeaders}>
            <h2>
            50+ Beautiful rooms <br />
            inspiration
            </h2>
            <p>Our designer already made a lot of beautiful <br /> prototipe of rooms that inspire you</p>
            
            <div><Link href={'/'}>Explore More</Link></div>
          </div>
          <div className={styles.inspoImgs}>
            <div className={styles.carouselImgContainer}>
              <Image className={styles.carouselImgContainer} height={486} width={372} alt="" src={'/inspo image carousel/carousel 1.png'}/>

              <div className={styles.carouselImgContainerFilter}>
                <Link href={'/'}>
                  <span className={styles.carouselImgContainerFilterSubtext}>
                    01 —— Bed Room
                  </span>
                  <span className={styles.carouselImgContainerFilterHeader}>Inner Peace</span>
                </Link>
              </div>
            
            </div>
            <div className={styles.carouselImgContainer}>
              <Image className={styles.carouselImgContainer} height={486} width={372} alt="" src={'/inspo image carousel/carousel 2.png'}/>

              <div className={styles.carouselImgContainerFilter}>
                <Link href={'/'}>
                  <span className={styles.carouselImgContainerFilterSubtext}>
                    02 —— Bed Room
                  </span>
                  <span className={styles.carouselImgContainerFilterHeader}>Inner Peace</span>
                </Link>
              </div>

            </div>
            <div className={styles.carouselImgContainer}>
              <Image className={styles.carouselImgContainer} height={486} width={372} alt="" src={'/inspo image carousel/carousel 2.png'}/>

              <div className={styles.carouselImgContainerFilter}>
                <Link href={'/'}>
                  <span className={styles.carouselImgContainerFilterSubtext}>
                    03 —— Bed Room
                  </span>
                  <span className={styles.carouselImgContainerFilterHeader}>Inner Peace</span>
                </Link>
              </div>

            </div>
          </div>
        </div>
          
      </section>

      <section className={styles.funiroFurnitureSection}>
        <h3>
          Share your setup with
        </h3>
        <h2>
          #FurniroFurniture
        </h2>

        <div className={styles.funiroFurnitureImageContainer}>
          <div className={styles.funiroFurnitureLeftImages}>
            <div>
              <img className={styles.funiroFurnitureLeftImage1} src={'/funiroFurniture samples/sample7.png'}/>
              <img className={styles.funiroFurnitureLeftImage2} src={'/funiroFurniture samples/sample6.png'}/>
            </div>
            <div>
              <img className={styles.funiroFurnitureLeftImage3} src={'/funiroFurniture samples/sample9.png'}/>
              <img className={styles.funiroFurnitureLeftImage4} src={'/funiroFurniture samples/sample8.png'}/>
            </div>

            {/* <div>
              <Image className={styles.funiroFurnitureLeftImage1} alt="" width={274} height={382} src={'/funiroFurniture samples/sample7.png'}/>
              <Image className={styles.funiroFurnitureLeftImage2}  alt="" width={451} height={312} src={'/funiroFurniture samples/sample6.png'}/>
            </div>
            <div>
              <Image className={styles.funiroFurnitureLeftImage3} alt="" width={295} height={392} src={'/funiroFurniture samples/sample9.png'}/>
              <Image className={styles.funiroFurnitureLeftImage4} alt="" width={295} height={392} src={'/funiroFurniture samples/sample8.png'}/>
            </div> */}
            
          </div>
          <div className={styles.funiroFurnitureCenterImages}>
            <Image className={styles.funiroFurnitureimg1} alt="" width={295} height={392} src={'/funiroFurniture samples/sample1.png'}/>
          </div>
          <div className={styles.funiroFurnitureRightImages}>
            <div>
              <img className={styles.funiroFurnitureRighImage1} src={'/funiroFurniture samples/sample2.png'}/>
              <img className={styles.funiroFurnitureRighImage2} src={'/funiroFurniture samples/sample3.png'}/>
            </div>
            <div>
              <img className={styles.funiroFurnitureRighImage3} src={'/funiroFurniture samples/sample4.png'}/>
              <img className={styles.funiroFurnitureRighImage4} src={'/funiroFurniture samples/sample5.png'}/>
            </div>

            {/* <div>
              <Image className={styles.funiroFurnitureRighImage1} alt="" width={500} height={500} src={'/funiroFurniture samples/sample2.png'}/>
              <Image className={styles.funiroFurnitureRighImage2} alt="" width={500} height={500} src={'/funiroFurniture samples/sample3.png'}/>
            </div>
            <div>
              <Image className={styles.funiroFurnitureRighImage3} alt="" width={500} height={500} src={'/funiroFurniture samples/sample4.png'}/>
              <Image className={styles.funiroFurnitureRighImage4} alt="" width={500} height={500} src={'/funiroFurniture samples/sample5.png'}/>
            </div> */}
          </div>

        </div>

      </section>


    </main>
  );
}
