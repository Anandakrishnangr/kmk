export const Addproduct = () => {

    return (
        <div >
            <div className="container text-center card mt-5 ">
                <h3>ADD PRODUCT</h3>
            </div>
            <div className="container-fluid ">
                <form  className="container card px-3 py-4">

                    <div className=" row">
                        <div className="col-12 col-xl-6">
                            <label>Title</label>     <input type="text" className="form-control" name="title"></input>
                            <label>Cover</label>     <input type="file" className="form-control" name="cover"></input>
                            <label>Category</label>     <input type="text" className="form-control" name="category"></input>
                            <label>Sub Category</label>     <input type="text" className="form-control" name="subcategory"></input>
                        </div>

                        <div className="col-12 col-xl-6">
                            <label>MRP</label>   <input type="text" className="form-control" name="price"></input>
                            <label>Selling Price</label>     <input type="text" className="form-control" name="sell"></input>
                            <label>Delivery Charge</label>     <input type="text" className="form-control" name="dcharge"></input>
                            <label>Stock</label>     <input type="text" className="form-control" name="stock"></input>
                        </div>

                    </div>

                    <div className="row mt-1 p2t-2">
                        <div className="col-12">
                            <label>Discription</label>
                            <textarea className='form-control' name="productdiscription">

                            </textarea>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h5>Dimentions</h5>
                            <label>Height</label><input className="form-control"></input>
                            <label>Width</label><input className="form-control"></input>
                            <label>Weight</label><input className="form-control"></input>
                            <label>Volume</label><input className="form-control"></input>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h5>Product information</h5>
                            <label>Company</label><input className="form-control"></input>
                            <label>Size</label><input className="form-control"></input>
                            <label>Manufactured on</label><input className="form-control"></input>
                            <label>Included</label><input className="form-control"></input>
                        </div>

                    </div>

<input type="submit" className="form-control btn btn-success m-3"></input>
                </form>
            </div>
        </div>
    )
}
