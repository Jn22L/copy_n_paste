	public ModelAndView uploadTest0808( HttpServletRequest request, HttpServletResponse response) throws Exception{

		HttpSession session = request.getSession();
		session.setAttribute("USER_ID","22220252");
		session.setAttribute("NAME","테스트");

		String name1     = request.getParameter("WRITENAME");

		final MultipartHttpServletRequest multiRequest = (MultipartHttpServletRequest) request;
		Iterator<String> fileNames =  multiRequest.getFileNames();
		while(fileNames.hasNext()) {
		    MultipartFile mFile = multiRequest.getFile(fileNames.next());
		    if (mFile != null && !mFile.isEmpty()) {
			    String uploadPath     = "D:\\DATA\\RRKEL\\upload\\test0808\\";
			    File folder = new File(uploadPath);
				  if (!folder.exists()) {
		            try {
		            	 folder.mkdirs();
		            } catch (Exception e) {
		            	logger.info(e.getMessage() );
		            }
 			  	}  
			    String originalFileName = mFile.getOriginalFilename(); // 원본파일명 
			    String originalFileExtension = originalFileName.substring(originalFileName.lastIndexOf(".")); // 원복확장자
			    String uuid = UUID.randomUUID().toString();
			    //String uploadFileName = uuid;                        // 물리파일명(중복안되게 명칭수정)			
			    String uploadFileName   = originalFileName;            // 물리파일명(테스트를 위하여 원본파일명 그대로 올려봄)
                try {
                	File file = new File(uploadPath + uploadFileName);
                    mFile.transferTo(file); // 업로드 파일을 생성한다
                } catch (IllegalStateException e) {
                    e.printStackTrace();
                } catch (IOException e) {
                	logger.info(e.getMessage() );
                    //e.printStackTrace();
                }	    			    	
		    }
		}
       

		ModelAndView mav = new ModelAndView();
		mav.setViewName("forward:/upload_test.jsp");		
		return mav;
	}	
  
