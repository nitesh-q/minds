import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import ReCAPTCHA from "react-google-recaptcha";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// {<link
//   rel="stylesheet"
//   href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
//   integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
//   crossorigin="anonymous"
// /> }
const CouponGenerator = () => {
    const [length, setLength] = useState(8);
    const [prefix, setPrefix] = useState('');
    const [suffix, setSuffix] = useState('');
    const [codes, setCodes] = useState([]);
    const [NumberOfCode, setNumberOfCode] = useState(1);
    const [codePattern, setCodePattern] = useState('#####################');
    // eslint-disable-next-line no-unused-vars
    const [verified, setVerified] = useState(false);
    const [characters, setCharacters] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    const [characterType, setCharacterType] = useState('alphabet');
    const [customCharacters, setCustomCharacters] = useState('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    const [generatedCodes, setGeneratedCodes] = useState(false);
    const generateGiftCard = () => {
        setLength(16);
        setCodePattern('################');
        setCharacterType('numbers')
    };
    const [buttonName, setButtonName] = useState("99Minds");
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true);
    }

    const headers = [
        {
            label: 'coupon_code',
            key: 'code',
        }
    ];

    const generateCodes = () => {
        const generatedCodes = [];
        for (let i = 0; i < NumberOfCode; i++) {
            let code = '';
            while (code.length < length) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                code += characters[randomIndex];
            }
            const formattedCode = codePattern
                .split('')
                .map((char, index) => (char === '#' ? code[index] : char))
                .join('');
            generatedCodes.push({
                code: `${prefix}${formattedCode}${suffix}`,
            });
        }
        setGeneratedCodes(true)
        return generatedCodes;
    };

    const Pattern = () => {
        setCharacterType('Pattern');
        setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#*|%~?+-_=');
    };

    const Alphanumeric = () => {
        setCharacterType('alphanumeric');
        setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
    };

    const Alphabet = () => {
        setCharacterType('alphabet');
        setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
    };

    const allCaps = () => {
        setCharacterType('allCaps');
        setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    };


    const handleCodePatternChange = (e) => {
        setCodePattern(e.target.value);
    };

    const Generate = () => {
        const generatedCodes = generateCodes(characters);
        setCodes(generatedCodes);
    };

    return (
        <body>
        <div style={{}}>
            <div className="seo_features_one bg_color sec_pad banner_top body">
                <h1 style={{
                    animationFillMode: 'both',
                    animationDuration: '1000ms',
                    animationDelay: '0ms',
                    animationIterationCount: '1',
                    opacity: '1',
                    animationName: 'react-reveal-680479639667826-1',
                    alignContent: 'center',
                    color:"white"
                }}> Create Your Custom Coupons </h1>
                <p style={{
                    animationFillMode: 'both', animationDuration: '1149ms', animationDelay: '0ms', animationIterationCount: '1', opacity: '1', animationName: 'react-reveal-392934193827355-1'
                }}>Use free code generator to generate unique codes that can be used for coupons, gift cards, passwords, and more. If you need an end-to-end promotion management tool, try 99minds</p>
            </div>
            <div className="container-fluid">
                <div className="row m-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-check">
                            <input type="radio" className="btn-check" name="options" id="shopify" autoComplete="off" />
                            <label className="btn btn-outline-light" htmlFor="shopify" onClick={() => {
                                setButtonName(<img className="img-fluid" src="/static/shopify02-fa45d4d8ffa96abbe9d4c97c6a0c51bb.png" alt="logo"/>);
                            }}>
                                <div style={{ width: "100%", height: "auto" }}>
                                    <img className="img-fluid" src="/static/Shopify_logo_2018.svg" alt="logo" style={{ height: "25px" }} />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-check">
                            <input type="radio" className="btn-check" name="options" id="wooCommerce" autoComplete="off" />
                            <label className="btn btn-outline-light" htmlFor="wooCommerce" onClick={() => {
                                setButtonName(<img className="img-fluid" src="/static/woocommerce.svg" alt="logo" style={{ height: "25px" }} />);
                            }}>
                                <div style={{ width: "100%", height: "auto" }}>
                                    <img className="img-fluid" src="/static/woocommerce.svg" alt="logo" style={{ height: "25px" }} />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-check">
                            <input type="radio" className="btn-check" name="options" id="bigCommerce" autoComplete="off" />
                            <label className="btn btn-outline-light" htmlFor="bigCommerce" onClick={() => {
                                setButtonName(<img className="img-fluid" src="/static/bc-logo-dark.svg" alt="logo" style={{ height: "25px" }} />);
                            }}>
                                <div style={{ width: "100%", height: "auto" }}>
                                    <img className="img-fluid" src="/static/bc-logo-dark.svg" alt="logo" style={{ height: "25px" }} />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-check">
                            <input type="radio" className="btn-check" name="options" id="shopify+" autoComplete="off" />
                            <label className="btn btn-outline-light" htmlFor="shopify+" onClick={() => {
                                setButtonName(<img className="img-fluid" src="/static/shopify+.svg" alt="logo" style={{ height: "25px" }} />);
                            }}>
                                <div style={{ width: "100%", height: "auto" }}>
                                    <img className="img-fluid" src="/static/shopify+.svg" alt="logo" style={{ height: "25px" }} />
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="form-check">
                            <input type="radio" className="btn-check" name="options" id="CommerceTools" autoComplete="off" />
                            <label className="btn btn-outline-light" htmlFor="CommerceTools" onClick={() => {
                                setButtonName(<img className="img-fluid" src="/static/commercetools.svg" alt="logo" style={{ height: "25px" }} />);
                            }}>
                                <div style={{ width: "100%", height: "auto" }}>
                                    <img className="img-fluid" src="/static/commercetools.svg" alt="logo" style={{ height: "25px" }} />
                                </div>
                            </label>
                        </div>
                    </div>
                </div>


                <h1>Choose Your Templates</h1>
                <div className="row m-4">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <button className="btn btn-bd-primary" style={{ width: "100%", height: "auto" }} onClick={Alphanumeric}>
                            <h5>Generate Alphanumeric Codes</h5><br />
                            <h6>bTsW1gzi</h6>
                            <h6>DEsfn08t</h6>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <button className="btn btn-bd-primary" style={{ width: "100%", height: "auto" }} onClick={Pattern}>
                            <h5>Generate Pattern
                                <br /> Codes</h5><br />
                            <h6>WI?62?D9</h6>
                            <h6>=FWU3SY9</h6>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <button className="btn btn-bd-primary" style={{ width: "100%", height: "auto" }} onClick={Alphabet}>
                            <h5>Generate Alphabet Codes</h5><br />
                            <h6>LJqpihKG</h6>
                            <h6>iEkvquRR</h6>

                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <button className="btn btn-bd-primary" style={{ width: "100%", height: "auto" }} onClick={allCaps}>
                            <h5>Generate All Caps Codes</h5><br />
                            <h6>TAARRUKY</h6>
                            <h6>FDDRFZWW</h6>
                        </button>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <button className="btn btn-bd-primary" style={{ width: "100%", height: "auto" }} onClick={generateGiftCard}>
                            <h5>Generate GiftCard</h5><br />
                            <h6>Pivh-A8sD-jeSg-iHaY</h6>
                            <h6>przG-Gw5i-Umhq-Br5l</h6>
                        </button>
                    </div>
                </div>

                <div className="row m-4">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>Length of Code:</label>
                        <input type="number" value={length} onChange={(e) => setLength(Number(e.target.value))} className="form-control" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <label>Number of Codes:</label>
                        <input type="text" value={NumberOfCode} onChange={(e) => setNumberOfCode(e.target.value)} className="form-control" />
                    </div>
                </div>

                <p>
                    <button className="btn btn-bd-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Advance Settings
                    </button>
                </p>

                <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                        <div>
                            <label style={{ color: "black" }}>Prefix:</label>
                            <input type="text" value={prefix} onChange={(e) => setPrefix(e.target.value)} className="form-control" />
                        </div>
                        <div>
                            <label style={{ color: "black" }}>Suffix:</label>
                            <input type="text" value={suffix} onChange={(e) => setSuffix(e.target.value)} className="form-control" />
                        </div>
                        <div>
                            <label style={{ color: "black" }}>Characters:</label>
                            <div style={{ color: "black" }} className="input-group col-lg-6 col-md-6 col-sm-12">
                                <select
                                    className="form-select"
                                    value={characterType}
                                    onChange={(e) => {
                                        setCharacterType(e.target.value);
                                        if (e.target.value === 'custom') {
                                            setCharacters(customCharacters);
                                        } else if (e.target.value === 'alphabet') {
                                            setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
                                        } else if (e.target.value === 'numbers') {
                                            setCharacters('0123456789');
                                        } else if (e.target.value === 'alphanumeric') {
                                            setCharacters('ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
                                        }
                                    }}
                                >
                                    <option style={{ color: "black" }} value="custom">Custom</option>
                                    <option style={{ color: "black" }} value="alphabet">Alphabet</option>
                                    <option style={{ color: "black" }} value="numbers">Numbers</option>
                                    <option style={{ color: "black" }} value="alphanumeric">Alphanumeric</option>
                                </select>
                                {characterType === 'custom' && (
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={customCharacters}
                                        onChange={(e) => setCustomCharacters(e.target.value)}
                                    />
                                )}
                            </div>
                        </div>

                        <div>
                            <label style={{ color: "black" }}>Code Pattern: </label>
                            <input type="text" value={codePattern} onChange={handleCodePatternChange} className="form-control" />
                        </div>
                    </div>
                </div>
                <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChange}
                />
                {verified ? <>
                    <button className="btn btn-bd-primary" style={{ marginTop: "3vh" }} onClick={Generate}>
                        <h5 className="col-12">Generate</h5>
                    </button>
                    {generatedCodes ? <h1 className="col-12">Generated Codes</h1> : ""}
                    <div>
                        <ul className="list-group" style={{ height: "33vh", overflow: "auto" }}>
                            {codes.map((code, index) => (
                                <li className="list-group-item" key={index}>
                                    {code.code}</li>
                            ))}
                        </ul>
                        {generatedCodes ? <div style={{ paddingBottom: "30px" }} className='mt-4'>
                            <CSVLink data={codes} headers={headers} filename="exported_code.csv">
                                <button className="btn btn-light" type="button" >Export</button>
                            </CSVLink>
                            <button
                                className="btn btn-light"
                                style={{ marginLeft: "3vh" }}
                                onClick={() => window.open("https://giftcard.99minds.io/access/login", "_blank")}
                            >Import to {buttonName}</button>
                        </div> : ""}
                    </div>
                </> : ""}
            </div>
        </div>
        </body>
    );
};

export default CouponGenerator;
