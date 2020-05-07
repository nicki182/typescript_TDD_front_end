import puppeteer from 'puppeteer'
import * as React from 'react';
describe('Web app testing from client point', () => {
    it('test web from client in Page route', async () => {
        let browser = await puppeteer.launch({
            headless: false,
            slowMo: 35
        });
        const page=await browser.newPage()
        await page.goto('http://localhost:3030/PAGE');
        await page.click('input')
        await page.type('input','d')
        await page.click('button')
        await browser.close()
    },10000),
        it('test web for Register from client',async ()=>{
            let browser = await puppeteer.launch({
                headless: false,
                slowMo: 35
            });
            const page=await browser.newPage()
            await page.goto('http://localhost:3030/REGISTER');
            await page.click('input#name')
            await page.type('input#name','d')
            await page.click('input#lastname')
            await page.type('input#lastname','d')
            await page.click('input#email')
            await page.type('input#email','nicki_stru1@gmail.com')
            await page.click('input#password')
            await page.type('input#password','123')
            await page.click('input#confirm_password')
            await page.type('input#confirm_password','123')
            await page.click('button')
            await browser.close()
        },15000)
        })