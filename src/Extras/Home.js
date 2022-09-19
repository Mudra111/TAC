import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <Link class="dropdown-item" to="/cat">
              Category
            </Link>
          </li>
          <li>
            <Link class="dropdown-item" to="/wel">
              Welcome to the Fiverr Forum
            </Link>
          </li>
          <li>
            <Link class="dropdown-item" to="/features_resource">
              Featured Topics and Additional Resources
            </Link>
          </li>
        </ul>
      </div>
      <hr />
    </div>
  );
}

export default Home;
