import React from 'react'
import './header1.css'
import logo from "./logo.png";

export default function Header1() {
    return (
        <nav className="nav1">

            <div>
                <ul className="nav justify-content-end ">
                    <li className="nav-item me-5">
                        <img src={logo} alt=""  className='setlogo'/>
                    </li>
                    <li className="nav-item right">
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Searchabc</button>
                        </form>
                    </li>
                    <li className="nav-item lh">
                        <a className="active" aria-current="page" href="#"><b>Tac Business</b></a>
                    </li>
                    <li className="nav-item dropdown">
                        <a id="navbarDropdown" data-bs-toggle="dropdown"
                            href="#"><b>Explore</b></a>
                        <ul className="dropdown-menu drop" aria-labelledby="navbarDropdown">
                            <div class="container">
                                <div class="row row-cols-2 text-align-center">
                                    <div class="col">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Discover<br /><p className='hdrp'>Inspiring projects made on Fiverr</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Guides<br /><p className='hdrp'>In-depth guides covering business topics</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Learn<br /><p className='hdrp'>Professional online courses, led by experts</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Logo Maker<br /><p className='hdrp'>Create your logo instantly</p></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col">
                                        <ul class="nav flex-column">
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Community<br /><p className='hdrp'>Connect with Fiverr’s team and community</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Podcast<br /><p className='hdrp'>Inside tips from top business minds</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Blog<br /><p className='hdrp'>News, information and community stories</p></a>
                                            </li>
                                            <li class="nav-item">
                                                <a class="hdra" href="#">Fiverr Workspace<br /><p className='hdrp'>One place to manage your business</p></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a id="navbarDropdown" data-bs-toggle="dropdown" role="button"
                            href="#"><b>Language</b></a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <label class="rdolbl">One
                                <a className='dropdown' href='#'><input type="radio" checked="checked" name="radio" />
                                    <span class="checkmark"></span></a>
                            </label>
                            <label class="rdolbl">Two
                                <a className='dropdown' href='#'><input type="radio" name="radio" />
                                    <span class="checkmark"></span></a>
                            </label>
                            <label class="rdolbl">Three
                                <a className='dropdown' href='#'><input type="radio" name="radio"/>
                                    <span class="checkmark"></span></a>
                            </label>
                            <label class="rdolbl">Four
                                <a className='dropdown' href='#'><input type="radio" name="radio" />
                                    <span class="checkmark"></span></a>
                            </label>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <a id="navbarDropdown" data-bs-toggle="dropdown" role="button"
                            href="#"><b>Currency</b></a>
                        <ul className="dropdown-menu scroll" aria-labelledby="navbarDropdown">
                            <label class="rdolbl">One
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" checked="checked" name="radio" />
                                    </a>
                            </label>
                            <label class="rdolbl">Two
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" name="radio" />
                                    </a>
                            </label>
                            <label class="rdolbl">Three
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" name="radio" />
                                    </a>
                            </label>
                            <label class="rdolbl">Four
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" name="radio" />
                                    </a>
                            </label>
                            <label class="rdolbl">Five
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" name="radio" />
                                    </a>
                            </label>
                            <label class="rdolbl">Six
                                <a className='dropdown' href='#'>
                                <span class="checkmark"></span>
                                <input type="radio" name="radio" />
                                    </a>
                            </label>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <a href="#"><b>Become a Seller</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="signbtn" href="#"><b>Sign in</b></a>
                    </li>
                    <li className="nav-item">
                        <a className="joinbtn" href="#"><b>Join</b></a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}
