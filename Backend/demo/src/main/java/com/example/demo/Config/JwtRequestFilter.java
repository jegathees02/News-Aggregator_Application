// package com.example.demo.Config;

// import com.example.demo.Article.UserDetailsServiceImpl;
// import io.jsonwebtoken.ExpiredJwtException;
// import io.jsonwebtoken.SignatureException;
// import jakarta.servlet.*;
// import jakarta.servlet.http.HttpServletRequest;
// import jakarta.servlet.http.HttpServletResponse;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.userdetails.UserDetails;
// import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
// import org.springframework.web.filter.OncePerRequestFilter;
// import java.io.IOException;

// public class JwtRequestFilter extends OncePerRequestFilter {

//     private final UserDetailsServiceImpl userDetailsService;

//     @Autowired
//     public JwtRequestFilter(UserDetailsServiceImpl userDetailsService) {
//         this.userDetailsService = userDetailsService;
//     }

//     @Override
//     protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
//             throws ServletException, IOException {
//         final String authorizationHeader = request.getHeader("Authorization");
//         String username = null;
//         String jwt = null;

//         if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
//             jwt = authorizationHeader.substring(7);
//             try {
//                 username = JwtTokenUtil.extractUsername(jwt);
//             } catch (IllegalArgumentException e) {
//                 logger.error("Unable to get JWT Token");
//             } catch (ExpiredJwtException e) {
//                 logger.error("JWT Token has expired");
//             } catch (SignatureException e) {
//                 logger.error("Invalid JWT signature");
//             }
//         }

//         if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
//             UserDetails userDetails = this.userDetailsService.loadUserByUsername(username);
//             if (JwtTokenUtil.validateToken(jwt, userDetails)) {
//                 UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
//                         userDetails, null, userDetails.getAuthorities());
//                 authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                 SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//             }
//         }

//         chain.doFilter(request, response);
//     }
// }
