# -*- encoding: utf-8 -*-
# stub: mongo 2.5.3 ruby lib

Gem::Specification.new do |s|
  s.name = "mongo".freeze
  s.version = "2.5.3"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Tyler Brock".freeze, "Emily Stolfo".freeze, "Durran Jordan".freeze]
  s.cert_chain = ["-----BEGIN CERTIFICATE-----\nMIIDfDCCAmSgAwIBAgIBATANBgkqhkiG9w0BAQUFADBCMRQwEgYDVQQDDAtkcml2\nZXItcnVieTEVMBMGCgmSJomT8ixkARkWBTEwZ2VuMRMwEQYKCZImiZPyLGQBGRYD\nY29tMB4XDTE4MDExNzE1NTEzM1oXDTE5MDExNzE1NTEzM1owQjEUMBIGA1UEAwwL\nZHJpdmVyLXJ1YnkxFTATBgoJkiaJk/IsZAEZFgUxMGdlbjETMBEGCgmSJomT8ixk\nARkWA2NvbTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBANFdSAa8fRm1\nbAM9za6Z0fAH4g02bqM1NGnw8zJQrE/PFrFfY6IFCT2AsLfOwr1maVm7iU1+kdVI\nIQ+iI/9+E+ArJ+rbGV3dDPQ+SLl3mLT+vXjfjcxMqI2IW6UuVtt2U3Rxd4QU0kdT\nJxmcPYs5fDN6BgYc6XXgUjy3m+Kwha2pGctdciUOwEfOZ4RmNRlEZKCMLRHdFP8j\n4WTnJSGfXDiuoXICJb5yOPOZPuaapPSNXp93QkUdsqdKC32I+KMpKKYGBQ6yisfA\n5MyVPPCzLR1lP5qXVGJPnOqUAkvEUfCahg7EP9tI20qxiXrR6TSEraYhIFXL0EGY\nu8KAcPHm5KkCAwEAAaN9MHswCQYDVR0TBAIwADALBgNVHQ8EBAMCBLAwHQYDVR0O\nBBYEFFt3WbF+9JpUjAoj62cQBgNb8HzXMCAGA1UdEQQZMBeBFWRyaXZlci1ydWJ5\nQDEwZ2VuLmNvbTAgBgNVHRIEGTAXgRVkcml2ZXItcnVieUAxMGdlbi5jb20wDQYJ\nKoZIhvcNAQEFBQADggEBADq2Bp1xQ21f9yY8nls+SAXknwgs90UNeQgK2mI1YboL\nqek94ZgHDpxE0RvUzioYQSy5V1JjOLk34Nynd2KSJyNViWmJ/MO5uLBb6jMKMX3h\niMrm942h8g6t2D2/4IqG3zfI0xTlss/c2ddZEw7+JRRK0x6HBijTwIyEKb9YEnaV\n17PTRIoD2Nkqh2rWM3khNbIkEuYmIveiul/Lm9quiC7yNaDYoWwC8bsTLUCQYUy8\n3s0DZnO1KxiaSyKOest/k/qf2tqdbmmhZ+Kd8E2vMN9RuNjPzKRPtNsM4mZGKEog\np3shId/bDtqoYu1EX+ot1RmsQEYYUO6hhaNOm9WmvIs=\n-----END CERTIFICATE-----\n".freeze]
  s.date = "2018-05-04"
  s.description = "A Ruby driver for MongoDB".freeze
  s.email = "mongodb-dev@googlegroups.com".freeze
  s.executables = ["mongo_console".freeze]
  s.files = ["bin/mongo_console".freeze]
  s.homepage = "http://www.mongodb.org".freeze
  s.licenses = ["Apache License Version 2.0".freeze]
  s.rubygems_version = "3.3.13".freeze
  s.summary = "Ruby driver for MongoDB".freeze

  s.installed_by_version = "3.3.13" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4
  end

  if s.respond_to? :add_runtime_dependency then
    s.add_runtime_dependency(%q<bson>.freeze, [">= 4.3.0", "< 5.0.0"])
  else
    s.add_dependency(%q<bson>.freeze, [">= 4.3.0", "< 5.0.0"])
  end
end
