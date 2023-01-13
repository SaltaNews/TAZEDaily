package com.tazedaily.TAZEDaily.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TAZEController {
    @GetMapping("/")
    public String index(Model model) {
        return "index";
    }
}
