import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

function FrontPage () {
        return (
            <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                    <div className="fw7 mr1">Proyect_TDD</div>
                    <Link to="/REGISTER" className="ml1 no-underline black">
                        REGISTER
                    </Link>
                </div>
            </div>
        )
    }
export default FrontPage