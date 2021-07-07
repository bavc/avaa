require 'nokogiri'
# This will continually append data to _data/gallery.yaml, so please
# delete or empty the file before running this update operation
images = Array.new
Dir.glob('_artifacts/*.md') do |md_file|
  md = Nokogiri::HTML(open(md_file))
  images = md.css('img').map{ |i| i['src'].gsub("{{ site.baseurl }}/images/","") }
  if images.any?
    File.open("_data/gallery.yaml", 'a') do |f|
      images.each{|i| f.write("- for_page: " + md_file.gsub("_artifacts/","").gsub(".md",".html") + "\n  file: " + i + "\n")}
    end
  end
end
