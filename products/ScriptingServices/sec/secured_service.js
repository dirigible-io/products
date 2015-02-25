
// print in response
response.setContentType("text/html");
response.getWriter().println("Hello from the Secured Service 1!");
response.getWriter().flush();
response.getWriter().close();
