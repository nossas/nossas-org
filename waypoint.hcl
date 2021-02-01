project = "bonde"

app "nossas-org" {
  labels = {
      "service" = "next-website",
      "env" = "dev"
  }

  build {
    use "docker" {}
    registry {
      use "docker" {
        image = "nossas/next-website"
        tag   = "latest"
      }
    }
 }

  deploy {
    use "kubernetes" {
      probe_path = "/"
      service_port = 3003
    }
  }

  release {
    use "kubernetes" {
      port = 3003
    }
  }
}
