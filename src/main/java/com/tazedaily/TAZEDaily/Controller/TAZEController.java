package com.tazedaily.TAZEDaily.Controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TAZEController {
    @Value("${spring.application.name}")
    String appName;

    @GetMapping(value = { "/", "/index" })
    public String index(Model model) {
        model.addAttribute("appName", appName);
        return "index";
    }

    @RequestMapping(value = "/error")
    public String error(Model model) {
        return "error";
    }
}
