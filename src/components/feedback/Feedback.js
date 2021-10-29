import React from 'react'

export default function Feedback() {
   return (
      <div>
         <div
            className="row row-cols-1 row-cols-sm-2 px-5 mx-auto justify-content-center align-items-center"
            style={{ 'min-height': 'calc(100vh - 292px)' }}
         >
            <div className="d-flex justify-content-center align-items-center h-100 ">
               <div className="w-100">
                  <form>
                     <div class="form-group">
                        <label for="exampleFormControlInput1">
                           Email address
                        </label>
                        <input
                           type="email"
                           class="form-control"
                           id="exampleFormControlInput1"
                           placeholder="name@example.com"
                        />
                     </div>

                     <div class="form-group">
                        <label for="exampleFormControlTextarea1">
                           Feedback
                        </label>
                        <textarea
                           class="form-control"
                           id="exampleFormControlTextarea1"
                           rows="3"
                        ></textarea>
                        <input type="submit" value="Give Feedback" />
                     </div>
                  </form>
               </div>
            </div>
            <div className="h-100">
               <img
                  className="img-fluid "
                  src="https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/09/Female_Doctor_Daughter_Mother_1296x728-header-1296x729.jpg?w=1155&h=2268"
                  alt=""
               />
            </div>
         </div>
      </div>
   )
}
