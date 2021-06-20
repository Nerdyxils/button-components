import React from 'react'
import Button from './components/Button'
import cart from './images/shopping-cart.svg'
import './main.css'

function Main() {
    return (
        <div className="container">
            <h1>Buttons</h1>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button />`}</small>
                    <Button value="Default" styleClass="btn"/>
                </div>

                <div className="b_item">
                    <small>&:hover, &:focus</small>
                    <Button value="Default" styleClass="btn btn-hover"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button variant=”outline” />`}</small>
                    <Button value="Default" styleClass="btn outline"/>
                </div>

                <div className="b_item">
                    <small>&:hover, &:focus</small>
                    <Button value="Default" styleClass="btn outline-hover"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button variant=”text” />`}</small>
                    <Button value="Default" styleClass="btn btn-text"/>
                </div>

                <div className="b_item">
                    <small>&:hover, &:focus</small>
                    <Button value="Default" styleClass="btn btn-text-hover"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button disableShadow />`}</small>
                    <Button value="Default" styleClass="btn no-shadow"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button disabled />`}</small>
                    <Button value="Default" styleClass="btn disabled"/>
                </div>
                <div className="b_item">
                    <small>{`<Button variant=”text” disabled />`}</small>
                    <Button value="Default" styleClass="btn disabled-hover"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button startIcon=”local_grocery_store” />`}</small>
                    <Button icon={cart} img='img' value="Default" styleClass="btn cart_btn"/>
                </div>
                <div className="b_item">
                    <small>{`<Button startIcon=”local_grocery_store” />`}</small>
                    <Button icon={cart} img='img-right' value="Default" styleClass="btn cart_btn"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button size=”sm” />`}</small>
                    <Button value="Default" styleClass="btn sm"/>
                </div>
                <div className="b_item">
                    <small>{`<Button size=”md” />`}</small>
                    <Button value="Default" styleClass="btn md"/>
                </div>
                <div className="b_item">
                    <small>{`<Button size=”lg” />`}</small>
                    <Button value="Default" styleClass="btn lg"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>{`<Button color=”default” />`}</small>
                    <Button value="Default" styleClass="btn"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”primary” />`}</small>
                    <Button value="Default" styleClass="btn btn-primary"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”secondary” />`}</small>
                    <Button value="Default" styleClass="btn btn-secondary"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”danger” />`}</small>
                    <Button value="Default" styleClass="btn btn-danger"/>
                </div>
            </div>
            <div className="b_flex">
                <div className="b_item">
                    <small>&:hover, &:focus</small>
                    <Button value="Default" styleClass="btn-hover"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”primary” />`}</small>
                    <Button value="Default" styleClass="btn btn-primary-hover"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”secondary” />`}</small>
                    <Button value="Default" styleClass="btn btn-secondary-hover"/>
                </div>
                <div className="b_item">
                    <small>{`<Button color=”danger” />`}</small>
                    <Button value="Default" styleClass="btn btn-danger-hover"/>
                </div>
            </div>


        <div className="cc">
           <small>created by Nerdyxils - devChallenges.io</small>
        </div>

        </div>
    )
}

export default Main
